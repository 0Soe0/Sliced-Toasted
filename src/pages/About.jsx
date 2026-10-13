import banner from '../assets/kitchenCounter.jpg';
import pizzaCutting from '../assets/pizzaCutting.jpg';
import pizzaExample from '../assets/pizzaExample.png';
import ingredientsCounter from '../assets/ingredientsCounter.jpg'
import '../styles/About.css';
import { Link } from 'react-router-dom';
import { Carousel } from '../components/Carousel.jsx';
import reviews from '../helpers/reviews.json';
import { ReviewCard } from '../components/ReviewCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const About = () => {
  return (
    <>
      <div className='aboutContainer'>
        <section className="restaurantBanner">
          <img src={banner} alt="" />
          <h1 className="title">ABOUT US</h1>
        </section>

        <section className='infoSection'>
          <img src={pizzaCutting} alt="" />
          <div className='infoSectionText'>
            <p>We believe good pizza brings people together.</p>
            <p>At Sliced&Toasted, we’re all about making pizza the way we love to eat it: crispy, cheesy, tasty, and made with care. We take our time with the dough, use ingredients we’re proud of, and let a hot oven do what it does best.</p>
            <p>But Sliced&Toasted is about more than what comes out of the oven. It’s about the late-night slices, the table full of family & friends, the first bite when you’re really hungry, every inviting moment of celebration and every not so happy ones, when we need a little something to cheer us up.</p>
            <span>We make the pizza. You make the memories.</span>
            <span className='slogan'>In crust we trust. 🍕</span>
          </div>
        </section>
        <section className='newsletter'>
          <span>SUBSCRIBE TO OUR NEWSLETTER</span>
            <form>
              <input type="email" placeholder='Enter your email...'required/>
              <Link to="*">SUBSCRIBE</Link>
            </form>
        </section>
        <section className='pizzaOfTheMonthSection'>
          <img src={pizzaExample} alt="" />
          <div className='pizzaOfTheMonthText'>
            <h2>PIZZA OF THE MONTH</h2>
            <span>Your ideas belong to our culture.</span>
            <p>Every month, we open the kitchen to your inventions. Send us your dream pizza flavors: crazy, sweet, spicy, or something nobody's thought of before. We’ll then put them up for a vote and let people decide on their favorite. Whichever pizza gets the most votes earns its place on the menu for the entire month. And the first slice for the winner goes on the house!</p>
          </div>
          <Link to='/PizzaOfTheMonth'>SUGGEST</Link>
        </section>
        <section className='reviews'>
          <h2>BECAUSE WE ARE A TEAM</h2>
          <span className='reviewsSubtitle'>Here are some of your crispy shared thoughts.</span>
          <Carousel items={reviews} CardComponent={ReviewCard}></Carousel>
        </section>
        <section className='workWithUsSection'>
          <h2>JOIN THE TABLE</h2>
          <img src={ingredientsCounter} alt="picture of a restaurant kitchen counter with pizza ingredients on it" />
          <Link to='/WorkWithUs'>
            <span>Check our open positions</span>
            <ArrowForwardIcon/>
          </Link>
        </section>
      </div>
    </>
  )
  
};