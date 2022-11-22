import React from 'react';
import * as Styled from './styles';

export type CartPageProps = {
  name: string;
};

export default function CartPage() {
  return (
    <Styled.Container>
      <h1>Olá CartPage</h1>
    </Styled.Container>
  );
}
