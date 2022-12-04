import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    display: block;
    gap: 10rem;
    padding-top: 15rem;
    @media (min-width: ${theme.screen.size.medium}) {
      padding-top: 20rem;
    }
  `}
`;

export const Empty = styled.div`
  h1 {
    text-align: center;
  }
`;

export const Products = styled.div``;

export const Price = styled.div`
  display: block;
`;
