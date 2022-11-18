import React from 'react';
import CartButton from '../CartButton';
import Container from '../Container';
import LoginButton from '../LoginButton';
import Logo from '../Logo';
import Menu from '../Menu';
import Nav from '../Nav';

import * as Styled from './styles';

export type HeaderProps = {
  number: number;
};

export default function Header({ number }: HeaderProps) {
  return (
    <Styled.Header>
      <Container height={'100'}>
        <Logo />
        <Nav />
        <Menu />
        <Styled.Icons>
          <LoginButton />
          <CartButton number={number} />
        </Styled.Icons>
      </Container>
    </Styled.Header>
  );
}
