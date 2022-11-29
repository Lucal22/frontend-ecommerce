import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './components/Header';
import CartPage from './container/CartPage';
import HomePage from './container/HomePage';

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
