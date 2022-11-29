import axios from 'axios';
import { useQuery } from 'react-query';
import Container from '../../components/Container';
import { api } from '../../lib/api';
import { Product } from '../../type/products';
import * as Styled from './styles';

export type CartPageProps = {
  name: string;
};

export default function CartPage() {
  const { isLoading, data } = useQuery('products', () => {
    return axios.get(`${api}/getProducts`);
  });
  const array = [1, 4, 5];

  const filteredProducts = array.map((id: number) => {
    const filtering = data?.data.filter((product: Product) => {
      return product.id == id;
    });
    return filtering;
  });

  return (
    <Container display="block" height={'full'}>
      <Styled.Content>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          filteredProducts.map((item) => {
            return <h1 key={item[0].id}>{item[0].id}</h1>;
          })
        )}
      </Styled.Content>
    </Container>
  );
}
