import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './components/Header';
import CartPage from './container/CartPage';
import HomePage from './container/HomePage';

const queryClient = new QueryClient();

const cartStorage = localStorage.getItem('cart');
const cartObject = cartStorage ? JSON.parse(cartStorage) : null;
const cartState = cartObject != null ? cartObject : [];

function App() {
  const [count, setCount] = useState(cartObject?.length);

  function handleCount() {
    setCount(count + 1);
  }

  function handleSelected(products: number) {
    cartState.push(products);
  }

  localStorage.setItem('cart', JSON.stringify(cartState));

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header number={count} />
        <Routes>
          <Route
            path="/"
            element={<HomePage onCount={handleCount} onAdd={handleSelected} />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={'PÁGINA NÃO EXISTE'} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
