import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 10rem;
    padding: 1rem 0.5rem;
    background-color: ${theme.background.white};
    border: 1px solid black;
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  row-gap: 1rem;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 8rem;
  }
`;

export const Description = styled.div``;
