import { Route, Routes, useLocation} from 'react-router-dom'
import {Navbar, Footer} from './components'
import {Home, About, Menu, Contact, NotFound, Cart, MonthlyPizzaHistory, MonthlyPizzaWinner, PizzaOfTheMonth, WorkWithUs} from './pages'
import './App.css'

export const App = () => {

  const location = useLocation();

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/monthlyPizzaHistory" element={<MonthlyPizzaHistory />} />
        <Route path="/monthlyPizzaWinner" element={<MonthlyPizzaWinner />} />
        <Route path="/pizzaOfTheMonth" element={<PizzaOfTheMonth />} />
        <Route path="/workWithUs" element={<WorkWithUs />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </>
  )
};
