import video from '../assets/pizzaVideo.mp4';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Home = () => {
  return (
    <>
      <div className="home">
        <video className="backgroundVideo" autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className="videoOverlay"></div>
        <div className="homeContent">
          <h1>Sliced&Toasted</h1>
          <p>In crust we trust.</p>
        </div>
        <Link to="/menu" className='orderNow'>Order Now <ArrowForwardIcon/> </Link>
      </div>
    </>
  )
};