import { ShoppingCart } from 'phosphor-react';
import React from 'react';
import * as Styled from './styles';

export type CardProps = {
  src: string;
  alt: string;
  name: string;
  description: string;
  price: string;
};

export default function Card({
  src,
  alt,
  name,
  description,
  price,
}: CardProps) {
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
            <Styled.Button>
              <ShoppingCart size={32} />
            </Styled.Button>
          </Styled.Info>
        </Styled.Card>
      </Styled.Product>
    </Styled.Container>
  );
}
