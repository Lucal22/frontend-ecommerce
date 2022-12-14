import styled, { css, DefaultTheme } from 'styled-components';

export type ContainerStyleProps = {
  background?: 'white' | 'gray';
  height: 'full' | '100';
  display?: 'flex' | 'block';
};

const backGround = {
  white: (theme: DefaultTheme) => css`
    background-color: ${theme.background.white};
    color: ${theme.colors.blackColor};
  `,
  gray: (theme: DefaultTheme) => css`
    background-color: ${theme.background.gray};
    color: ${theme.colors.whiteColor};
  `,
};

const displayStyle = {
  flex: () => css`
    display: flex;
    align-items: center;
    position: relative; ;
  `,
  block: () => css`
    display: block;
  `,
};

export const Container = styled.div<ContainerStyleProps>`
  ${({ theme, background, height, display }) => css`
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 auto;
    padding: 0 1rem;
    min-height: ${height == 'full' ? '100vh' : '100%'};
    width: ${theme.screen.size.xSmall};
    @media (min-width: ${theme.screen.size.small}) {
      width: ${theme.screen.size.small};
    }
    @media (min-width: ${theme.screen.size.medium}) {
      width: ${theme.screen.size.medium};
    }
    @media (min-width: ${theme.screen.size.large}) {
      width: ${theme.screen.size.large};
    }
    ${background ? backGround[background](theme) : null}
    ${display ? displayStyle[display]() : null}
  `}
`;
