import React from 'react';
import * as Styled from './styles';

export type CartCardProps = {
  src: string;
  alt: string;
  name: string;
};

export default function CartCard({ src, alt, name }: CartCardProps) {
  return (
    <Styled.Container>
      <Styled.Grid>
        <Styled.Image>
          <img src={src} alt={alt} />
        </Styled.Image>
        <Styled.Description>
          <h2>{name}</h2>
        </Styled.Description>
      </Styled.Grid>
    </Styled.Container>
  );
}
