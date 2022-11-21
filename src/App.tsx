import { useState } from 'react';
import HomePage from './container/HomePage';

function App() {
  const [cartProducts, setCartProducts] = useState(['']);
  function handleSelecteds(products: string) {
    setCartProducts((prevProduct) => {
      return [...prevProduct, products];
    });
    console.log(cartProducts);
  }
  return (
    <>
      <HomePage onAdd={handleSelecteds} />
    </>
  );
}

export default App;
