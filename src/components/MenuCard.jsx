import '../styles/MenuCard.css';

export const MenuCard = ({name, img, price}) => {
  return (
    <>
      <div className='menuCardContainer'>
        <h2>{name}</h2>
        <img src={img} alt="picture of a pizza" />
        <div className='priceContainer'>
          <span>{price}</span>
        </div>
      </div>
    </>
  )
};