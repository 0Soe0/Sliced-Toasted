import '../styles/Contact.css';
import pizzaImg from '../assets/contactPizza.jpg';
import toast from 'react-hot-toast';
export const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault(); //Stops the browser from reloading the page or submitting the form normally sice this is just a demo
    toast('Oops! The pizza courier couldnt deliver this one. This form is just a demo!', {
      icon: '🍕',
      style: {
        color: '#000',
        background: 'rgba(236, 233, 185)',
      },
    });
    e.target.reset(); //Resets the form fields after the toast is displayed
  }

  return (
    <>
      <div className="contactContainer">
        <section className="pictureSide">
          <img src={pizzaImg} alt="Freshly baked pizza at Sliced&Toasted"/>
        </section>
  
        <section className="formSide">
          <h1>CONTACT US</h1>
          <p>Got a question, an idea, or just want to talk pizza? We're all ears!</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id='name' name="name" placeholder="Enter your name..." required/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id='email' name="email" placeholder="Enter your email..." required/>
            </div>
            <div>
              <label htmlFor="message">Spill the cheese!</label>
              <textarea id='message' name="message" placeholder="Enter your message..." required></textarea>
            </div>
            <button type="submit">SEND IT OUR WAY</button>
          </form>
        </section>
      </div>
    </>
  )
};