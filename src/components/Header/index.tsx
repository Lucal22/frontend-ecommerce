import React from 'react';
import CartButton from '../CartButton';
import Container from '../Container';
import Logo from '../Logo';
import Menu from '../Menu';
import Nav from '../Nav';

import * as Styled from './styles';

export type HeaderProps = {
  children: React.ReactNode;
};

export default function Header() {
  return (
    <Styled.Header>
      <Container height={'100'}>
        <Logo />
        <Nav />
        <Menu />
        <CartButton />
      </Container>
    </Styled.Header>
  );
}
