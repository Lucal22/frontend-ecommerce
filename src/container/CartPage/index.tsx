import axios from 'axios';
import { useQuery } from 'react-query';
import CartCard from '../../components/CartCard';
import Container from '../../components/Container';
import { api } from '../../lib/api';
import { CartProducts, Product } from '../../type/products';
import * as Styled from './styles';

export type CartPageProps = {
  name: string;
};

const cartStorage = localStorage.getItem('cart');
const cartItems: string[] = cartStorage ? JSON.parse(cartStorage) : [];

export default function CartPage() {
  const { isLoading, data } = useQuery('products', () => {
    return axios.get(`${api}/getProducts`);
  });

  const filteredProducts = cartItems?.map((id: string) => {
    const filtering = data?.data.filter((product: Product) => {
      return product.id == parseInt(id);
    });
    return filtering;
  });

  return (
    <Container display="block" height={'full'}>
      <Styled.Content>
        <Styled.Products></Styled.Products>
        <Styled.Price>
          {isLoading ? (
            <div>Loading</div>
          ) : cartItems.length != 0 ? (
            filteredProducts.map((item: CartProducts) => {
              return (
                <CartCard
                  key={item[0].id}
                  name={item[0].name}
                  src={item[0].image}
                  alt={item[0].image}
                />
              );
            })
          ) : (
            <h1>Carrinho vazio</h1>
          )}
        </Styled.Price>
      </Styled.Content>
    </Container>
  );
}
