import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { api } from '../../lib/api';
import { Data, Products } from '../../type/products';
import productSample from './example';
import * as Styled from './styles';

export default function HomePage() {
  const [products, setProducts] = useState(
    /*<Data>*/ productSample,
    /*[
   /* {
      name: '',
      brand: '',
      category: '',
      type: '',
      description: '',
      image: '',
      price: '',
      qtd: 0,
    },
  ]*/
  );

  /*  useEffect(() => {
    async function getProducts() {
      try {
        const productsData: Products = await axios.get(`${api}/getProducts`);
        setProducts(productsData.data);
      } catch (e) {
        console.error(e);
      }
    }
    getProducts();
  }, []); */

  console.log(products[0].brand);

  return (
    <>
      <Header number={1} />
      <Container display="block" height={'full'}>
        <Styled.Content>
          <Styled.Grid>
            {products.map((item) => {
              return (
                <Card
                  key={item.id}
                  name={item.name}
                  src={item.image}
                  alt={item.description}
                  description={item.description}
                  price={item.price}
                />
              );
            })}
          </Styled.Grid>
        </Styled.Content>
      </Container>
    </>
  );
}
