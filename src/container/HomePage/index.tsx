import axios from 'axios';
import { useQuery } from 'react-query';
import Card from '../../components/Card';
import CardSkeleton from '../../components/Card/skeleton';
import Container from '../../components/Container';
import { api } from '../../lib/api';
import { Event, Product } from '../../type/products';
import * as Styled from './styles';

export type HomePageProps = {
  onAdd: (arg: number) => void;
  onCount: () => void;
};

const counter = ['1', '2', '3', '4', '5', '6', '7', '8'];

export default function HomePage({ onAdd, onCount }: HomePageProps) {
  const { isLoading, data } = useQuery('products', () => {
    return axios.get(`${api}/getProducts`);
  });

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
    <Container display="block" height={'full'}>
      <Styled.Content>
        <Styled.Grid>
          {isLoading
            ? counter.map((item) => {
                return <CardSkeleton key={item} />;
              })
            : data?.data.map((item: Product) => {
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
  );
}
