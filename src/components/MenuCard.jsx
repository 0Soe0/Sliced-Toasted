import { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../hooks/useCart';
import '../styles/MenuCard.css';

export const MenuCard = ({id, name, img, price, description}) => {

  const { addToCart } = useCart();

  const [isExpanded, setIsExpanded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      img,
      price,
      description
    });
  };

  return (
    <>
      <div className={`menuCardContainer ${isExpanded ? 'is-expanded' : ''}`}>
        <h2>{name}</h2>

        <img src={img} alt="picture of a pizza" />

        <div className="priceContainer">
          <div className='priceOverlay'>
            <p className="pizzaDescription">{description}</p>
          </div>

          <button className="addToCartButton" type="button" onClick={handleAddToCart} aria-label={`Add ${name} to cart`}>
            <AddShoppingCartIcon />
          </button>

          <button 
            className="expandButton" 
            type="button" 
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-label={isExpanded ? 'Hide description' : 'Show description'} 
            aria-expanded={isExpanded}
          >
           <ArrowUpwardIcon />
          </button>

          <span className='desktopPrice'>{price}</span>

          <button className='mobileButton' type="button" onClick={handleAddToCart} aria-label={`Add ${name} to cart`}>
            <span>{price}</span>
            <AddShoppingCartIcon/>
          </button>
       </div>
      </div>
    </>
  )
};