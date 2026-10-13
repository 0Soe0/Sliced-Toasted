import menuList from '../helpers/menuList.json'
import { MenuCard } from  '../components/MenuCard.jsx';
import '../styles/Menu.css';

export const Menu = () => {

  return (
    <div className='menuContainer'>
      <h1 className='menuTitle'>OUR MENU</h1>
      <div className="menuList">
        {menuList.map((pizza) => (
          <MenuCard
            key={pizza.name}
            name={pizza.name}
            img={pizza.img}
            price={pizza.price}
          />
        ))}
      </div>
    </div>
  )
};