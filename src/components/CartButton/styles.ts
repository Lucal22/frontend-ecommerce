import styled, { css } from 'styled-components';

export const Cart = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.whiteColor};
  `}
`;

export const CartSvg = styled.div`
  width: 6rem;
  position: relative;
`;

export const CartCount = styled.div`
  ${({ theme }) => css`
    border-radius: 50%;
    width: 1.8rem;
    height: 1.8rem;
    color: ${theme.colors.whiteColor};
    font-family: ${theme.fonts.style.defaultFont};
    font-size: 1.4rem;
    text-align: center;
    background-color: red;
    position: absolute;
    bottom: 0;
    right: 22%;
  `}
`;
