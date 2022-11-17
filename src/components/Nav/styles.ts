import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: none;
    @media (min-width: ${theme.screen.size.medium}) {
      position: relative;
      display: block;
      margin: 0 auto;
      width: 50%;
      height: 100%;
    } ;
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: ${theme.spaces.xLarge};
  `}
`;

export const Item = styled.li`
  ${({ theme }) => css`
    list-style-type: none;
    text-decoration: none;
    font-size: ${theme.fonts.size.small};
    font-weight: 500;
    &:hover {
      color: ${theme.colors.grayColor};
      transition: all 0.3s ease-in-out;
    }
  `}
`;
