import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect} from 'react';

export const Navbar = () => {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const closeMenu = () => {
    setOpenLinks(false);
  };

  useEffect(() => {
    document.body.style.overflow = openLinks ? 'hidden' : '';
  
    return () => {
      document.body.style.overflow = '';
    };
  }, [openLinks]);

  return (
    <>
      <nav>
        <div className="leftSide">
          <Link to="/" id='logo'>
            <img src={logo} alt="PizzaPage home" />
            <span>Sliced&Toasted</span>
          </Link>
        </div>

        <div className='rightSide'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <button onClick={toggleNavbar}><MenuIcon/></button>
        </div>
      </nav>
      {openLinks && (
        <div className="mobileMenu">
          <button className="closeButton" onClick={toggleNavbar}><CloseIcon/></button>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </>
  )
};