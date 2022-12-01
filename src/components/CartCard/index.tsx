import React from 'react';
import * as Styled from './styles';

export type CartCardProps = {
  children: React.ReactNode;
};

export default function CartCard() {
  return (
    <Styled.Container>
      <p>Olá mundo</p>
    </Styled.Container>
  );
}
