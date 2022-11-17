import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: none;
    position: absolute;
    cursor: pointer;
    color: red;
    @media (min-width: ${theme.screen.size.medium}) {
      display: block;
    } ;
  `}
`;
