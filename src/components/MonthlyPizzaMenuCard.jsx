import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../styles/MonthlyPizzaMenuCard.css';

export const MonthlyPizzaMenuCard = ({image, name, description, price}) => {

  return (
    <>
      <div className='monthlyPizzaMenuCardContainer'>
        <div className='monthlyPizzaMenuCardContent'>
          <img src={image} alt="monthly pizza winner image" />
          <div className='monthlyPizzaMenuCardInfo'>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <button className='monthlyPizzaMenuCardButton'><span>{price}</span><AddShoppingCartIcon/></button>
      </div>
    </>
  )
};