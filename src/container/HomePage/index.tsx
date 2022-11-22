import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Container from '../../components/Container';
import { api } from '../../lib/api';
import { Data, Event, Products } from '../../type/products';
import * as Styled from './styles';

export type HomePageProps = {
  onAdd: (arg: number) => void;
  onCount: () => void;
};

export default function HomePage({ onAdd, onCount }: HomePageProps) {
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
        const productsData: Products = await axios.get(`${api}/getProducts`);
        setProducts(productsData.data);
      } catch (e) {
        console.error(e);
      }
    }
    getProducts();
  }, []);

  function handleClick(event: Event) {
    if (event.target.value[0] === undefined) {
      return;
    } else {
      onAdd(event.target.value);
      onCount();
      event.preventDefault();
    }
  }

  return (
    <>
      <Container display="block" height={'full'}>
        <Styled.Content>
          <Styled.Grid>
            {products.map((item) => {
              return (
                <Card
                  key={item.id}
                  value={item.id}
                  name={item.name}
                  src={item.image}
                  alt={item.description}
                  description={item.description}
                  price={item.price}
                  onClick={handleClick}
                />
              );
            })}
          </Styled.Grid>
        </Styled.Content>
      </Container>
    </>
  );
}
