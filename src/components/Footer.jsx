import footerImg from '../assets/pizzaFooter.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='imgContainer'>
        <img src={footerImg} alt="" />
      </div>
      <ul className='footerList'>
        <li className='ig'><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a></li>
        <li><span>&copy; 2026 all rights reserved</span></li>
        <li className='wpp'><a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><WhatsAppIcon/></a></li>
      </ul>
    </div>
  )
};