import { MenuCard } from  '../components/MenuCard.jsx';
import { MonthlyPizzaMenuCard } from '../components/MonthlyPizzaMenuCard.jsx';
//import { useCart } from '../context/CartContext';
import menuList from '../helpers/menuList.json';
import pizzaWinners from '../helpers/pizzaWinners.json';
import '../styles/Menu.css';

export const Menu = () => {

  // const cart = useCart();
  // const addToCart = cart.addToCart;

  const pizzaWinner = pizzaWinners.find(
    (pizzaWinner) => pizzaWinner.id === 'eloteBeCrazy'
  );

  return (
    <div className='menuContainer'>
      <h1 className='menuTitle'>OUR MENU</h1>

      <h2 className='menuSubtitle'>SLICE OF FAME</h2>

      <MonthlyPizzaMenuCard
        key={pizzaWinner.id}
        name={pizzaWinner.name}
        image={pizzaWinner.img}
        description={pizzaWinner.description}
        price={pizzaWinner.price}
      />

      <div className="menuList">
        {menuList.map((pizza) => (
          <MenuCard
            key={pizza.name}
            name={pizza.name}
            description={pizza.description}
            img={pizza.img}
            price={pizza.price}
          />
        ))}
      </div>
    </div>
  )
};