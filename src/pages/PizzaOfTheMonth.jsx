import pizzaWinner from '../assets/sliceOfFame.png';
import '../styles/PizzaOfTheMonth.css';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const PizzaOfTheMonth = () => {

  return (
    <>
      <section className='monthlyPizzaWinnerSection'>
        <img src={pizzaWinner} alt="picture of the pizza of the month" />
        <div className='pizzaWinnerText'>
          <h1>SLICE OF FAME</h1>
          <span className='pizzaName'>Elote Be Crazy</span>
          <p>Chili-lime crema, mozzarella, roasted corn, crispy bacon, thinly sliced jalapeños and crumbled cotija cheese. Topped with ciboulette, lime zest, and a little chili oil after baking. This street mexican inspired combination has spiced up the heart of the community and made its way to be served as the slice of fame.</p>
          <span className='pun'>Dare to crust the process?</span>
        </div>
        <div className='pizzaWinnerButtons'>
        <Link to="/MonthlyPizzaWinner"><ArrowBackIcon/> MEET THE CHEF</Link>
        <Link to="/Cart">ORDER NOW <ArrowForwardIcon/></Link>
        </div>
      </section>

      <section className='monthlyPizzaWinnerCards'>
        
      </section>
    </>
  )
};