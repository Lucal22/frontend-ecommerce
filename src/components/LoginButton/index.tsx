import { UserCircle } from 'phosphor-react';
import React from 'react';
import Links from '../Links';
import * as Styled from './styles';

export default function LoginButton() {
  return (
    <Styled.Container>
      <Links link={'/login'}>
        <UserCircle size={32} />
      </Links>
    </Styled.Container>
  );
}
