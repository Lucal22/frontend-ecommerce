import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CartPage from './container/CartPage';
import HomePage from './container/HomePage';

function App() {
  const [cartProducts, setCartProducts] = useState([0]);
  const [count, setCount] = useState(0);

  function handleSelecteds(products: number) {
    setCartProducts((prevProduct) => {
      return [...prevProduct, products];
    });
    console.log(cartProducts);
  }

  function handleCount() {
    setCount(count + 1);
  }
  return (
    <>
      <Router>
        <Header number={count} />
        <Routes>
          <Route
            path="/"
            element={<HomePage onCount={handleCount} onAdd={handleSelecteds} />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={'PÁGINA NÃO EXISTE'} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
