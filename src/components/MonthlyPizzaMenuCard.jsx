import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../hooks/useCart';
import '../styles/MonthlyPizzaMenuCard.css';

export const MonthlyPizzaMenuCard = ({id, image, name, description, price}) => {

  const { addToCart } = useCart();


  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      image,
      price,
      description
    });
  };

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
        <button className='monthlyPizzaMenuCardButton'type="button" onClick={handleAddToCart} aria-label={`Add ${name} to cart`}>
          <span>{price}</span>
          <AddShoppingCartIcon/>
        </button>
      </div>
    </>
  )
};