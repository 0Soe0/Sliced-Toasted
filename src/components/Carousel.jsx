import {useState, useEffect, useRef} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../styles/Carousel.css';

export const Carousel = ({items, CardComponent}) => {

  //How many cards should be displayed on the carousel depending on the screen size
  const getCardsToShow = () => {
    if (window.innerWidth <= 600) {
      return 1;
    }

    if (window.innerWidth <= 900) {
      return 2;
    }

    return 3;
  };

  const [cardsToShow, setCardsToShow] = useState(
    getCardsToShow()
  );

  //If the page is resized, calculate the cards to be shown again
  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //Starting the index from the very first real card
  const [currentIndex, setCurrentIndex] = useState(cardsToShow);

  //State to determine whether animation on transition has to be on or off based off of the index we're moving to
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  //Track the initial position of a finger when starting to swipe withot triggering a render
  const touchStartX = useRef(null);

  //Function that stores the value of the starting position for the swipe (touch), hotizontally
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  //Function to handle if we actually swipe through cards when lifting the finger, and where to swipe to
  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
  
    const touchEndX = event.changedTouches[0].clientX; //Position when lifting the finger
    const difference = touchStartX.current - touchEndX;
  
    const swipeThreshold = 50; //The finger must move at least 50 pixels to count as a swipe, small movements won't accidentally change cards
  
    if (difference > swipeThreshold) {
      nextCard();
    } else if (difference < -swipeThreshold) {
      previousCard();
    }
  
    touchStartX.current = null; //Clears the stored position so it is ready for the next swipe
  };

  //Turning animations on when transitionEnabled changes after reaching a cloned card
  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    }
  }, [transitionEnabled]);

  //Our extended list of cards
  const extendedItems = [
    ...items.slice(-cardsToShow), //clones for the last cards at the beginning
    ...items, //real cards
    ...items.slice(0, cardsToShow) //clones for the first cards at the end
  ];

  const nextCard = () => {
    setCurrentIndex(currentIndex + 1);
  };
  
  const previousCard = () => {
    setCurrentIndex(currentIndex - 1);
  };

  //When reaching cloned cards we turn the animations off and move the carousel to the index needed
  const handleTransitionEnd = () => {
    if (currentIndex < cardsToShow) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex + items.length);
    } else if (currentIndex > items.length) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - items.length);
    }
  };

  return (
    <>
      <div className="carousel">
        <button onClick={previousCard} className="carouselButton">
          <ArrowBackIcon />
        </button>

        <div className="carouselViewport" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="carouselTrack" onTransitionEnd={handleTransitionEnd} style={{transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          transition: transitionEnabled ? 'transform 0.5s ease' : 'none'}}>
            {extendedItems.map((item, index) => (
            <div className="carouselCard" key={`${item.id}-${index}`}>
              <CardComponent {...item} />
            </div>
            ))}
          </div>
        </div>

        <button onClick={nextCard} className="carouselButton">
          <ArrowForwardIcon />
        </button>
    </div>
    </>
  )
};