import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    padding-top: 15rem;
    @media (min-width: ${theme.screen.size.medium}) {
      padding-top: 20rem;
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1rem;

    @media (min-width: ${theme.screen.size.small}) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: ${theme.screen.size.large}) {
      grid-template-columns: repeat(4, 1fr);
      row-gap: 2.5rem;
    }
  `}
`;
