import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from '../../components/Container';
import { api } from '../../lib/api';
import { Data, Products } from '../../type/products';
import * as Styled from './styles';

export type CartPageProps = {
  name: string;
};

export default function CartPage() {
  const [products, setProducts] = useState<Data>(
    /*productSample,*/
    [
      {
        id: 0,
        name: '',
        brand: '',
        category: '',
        type: '',
        description: '',
        image: '',
        price: '',
        qtd: 0,
      },
    ],
  );

  useEffect(() => {
    async function getProducts() {
      try {
        const productsData: Products = await axios.get(`${api}/getProducts`, {
          params: {
            id: 1,
          },
        });
        setProducts(productsData.data);
        console.log(productsData.data);
      } catch (e) {
        console.error(e);
      }
    }
    getProducts();
  }, []);
  return (
    <Container display="block" height={'full'}>
      <Styled.Content>
        <h1>Olá CartPage</h1>
      </Styled.Content>
    </Container>
  );
}
