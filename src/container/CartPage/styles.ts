import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    padding-top: 15rem;
    @media (min-width: ${theme.screen.size.medium}) {
      padding-top: 20rem;
    }
  `}
`;
