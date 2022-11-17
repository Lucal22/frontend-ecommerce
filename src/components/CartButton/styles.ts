import styled, { css } from 'styled-components';

export const Cart = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 30%;
    right: 2%;
    cursor: pointer;
    background: transparent;
    border: none;
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
    width: 1.7rem;
    height: 1.7rem;
    padding-top: 0.1rem;
    color: ${theme.colors.whiteColor};
    font-family: ${theme.fonts.style.defaultFont};
    background-color: red;
    position: absolute;
    bottom: 0;
    right: 0;
  `}
`;
