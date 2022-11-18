import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    height: 8rem;
    position: fixed;
    z-index: 1;
    background-color: ${theme.background.blueColor};
    color: ${theme.colors.whiteColor};
    backdrop-filter: blur(4px);
    box-shadow: 0px 4px 3px -2px rgba(0, 0, 0, 0.75);
  `}
`;

export const Icons = styled.div`
  position: absolute;
  top: 30%;
  right: -1%;
  display: flex;
  gap: 2rem;
`;
