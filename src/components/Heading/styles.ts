import styled, { css, DefaultTheme } from 'styled-components';

export type HeadingStyleProps = {
  color?: 'white' | 'black';
  size?: 'small' | 'medium' | 'big' | 'xBig' | 'large' | null;
};

const fontSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.size.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.size.medium};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.size.big};
  `,
  xBig: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.size.xBig};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.size.large};
  `,
};

export const Heading = styled.h1<HeadingStyleProps>`
  ${({ theme, color, size }) => css`
    color: ${color};
    ${size ? fontSize[size](theme) : null}
  `}
`;
