import React from 'react';
import * as Styled from './styles';
import { HeadingStyleProps } from './styles';

export type HeadingProps = HeadingStyleProps & {
  as?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
};

export default function Heading({
  as = 'h1',
  children,
  color = 'white',
  size = 'big',
}: HeadingProps) {
  return (
    <Styled.Heading size={size} color={color} as={as}>
      {children}
    </Styled.Heading>
  );
}
