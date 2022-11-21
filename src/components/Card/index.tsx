import { ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { Event } from '../../type/products';
import * as Styled from './styles';

export type CardProps = {
  src: string;
  alt: string;
  name: string;
  description: string;
  price: string;
  value: number;
  onClick: (event: Event) => void;
};

export default function Card({
  src,
  alt,
  name,
  description,
  price,
  value,
  onClick,
}: CardProps) {
  const [added, setAdded] = useState(false);
  return (
    <Styled.Container>
      <Styled.Product>
        <Styled.Card>
          <Styled.Img>
            <img src={src} alt={alt} />
          </Styled.Img>
          <Styled.Info>
            <Styled.Name>{name}</Styled.Name>
            <Styled.Description>{description}</Styled.Description>
            <Styled.Price>R${price}</Styled.Price>
            <Styled.Button
              Added={added}
              disabled={added}
              value={value}
              aria-label="Envia produto"
              onClick={(event) => {
                onClick(event);
                setAdded(true);
              }}
            >
              <ShoppingCart size={32} />
            </Styled.Button>
          </Styled.Info>
        </Styled.Card>
      </Styled.Product>
    </Styled.Container>
  );
}
