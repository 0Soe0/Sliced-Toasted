import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import pizzaWinnerPicture from '../assets/sliceOfFame.png';
import pizzaWinners from '../helpers/pizzaWinners.json';
import '../styles/PizzaOfTheMonth.css';

export const PizzaOfTheMonth = () => {

  const pizza = pizzaWinners.find(
    (pizza) => pizza.id === 23
  );

  return (
    <>
      <section className='monthlyPizzaWinnerSection'>
        <img src={pizzaWinnerPicture} alt="picture of the pizza of the month" />
        <div className='pizzaWinnerText'>
          <h1>SLICE OF FAME</h1>
          <span className='pizzaName'>{pizza.name}</span>
          <p>{pizza.description}</p>
          <span className='pun'>Dare to crust the process?</span>
        </div>
        <div className='pizzaWinnerButtons'>
        <Link to="/monthlyPizzaWinner"><ArrowBackIcon/> MEET THE CHEF</Link>
        <Link to="/menu">ORDER NOW <ArrowForwardIcon/></Link>
        </div>
      </section>

      <section className='monthlyPizzaWinnerCards'>
        
      </section>
    </>
  )
};