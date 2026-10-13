import '../styles/ReviewCard.css';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

export const ReviewCard = ({text, name}) => {

  return (
    <>
      <div className='reviewCard'>
        <p>{text}</p>
        <div className='signature'>
          <span>{name}</span>
          <LocalPizzaIcon/>
        </div>
      </div>
    </>
  )
};