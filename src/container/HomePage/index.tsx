import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { api } from '../../lib/api';
import { Data, Products } from '../../type/products';
import * as Styled from './styles';

export default function HomePage() {
  const [products, setProducts] = useState<Data>([
    {
      name: '',
      brand: '',
      category: '',
      type: '',
      description: '',
      image: '',
      price: '',
      qtd: 0,
    },
  ]);

  useEffect(() => {
    async function getProducts() {
      try {
        const productsData: Products = await axios.get(`${api}/getProducts`);
        setProducts(productsData.data);
      } catch (e) {
        console.error(e);
      }
    }
    getProducts();
  }, []);

  console.log(products[0].brand);

  return (
    <Styled.Container>
      <Header number={0} />
      <Container height={'full'}>
        <h1>Teste</h1>
        {products.map((item) => {
          return <p key={item.brand}>{item.brand}</p>;
        })}
      </Container>
    </Styled.Container>
  );
}
