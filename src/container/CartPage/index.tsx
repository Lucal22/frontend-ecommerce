import axios from 'axios';
import { useQuery } from 'react-query';
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
        {isLoading ? (
          <div>Loading</div>
        ) : cartItems.length != 0 ? (
          filteredProducts.map((item: CartProducts) => {
            return <h1 key={item[0].id}>{item[0].name}</h1>;
          })
        ) : (
          <h1>Carrinho vazio</h1>
        )}
      </Styled.Content>
    </Container>
  );
}
