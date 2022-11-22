import styled, { css, DefaultTheme } from 'styled-components';

export type CardStylesProps = {
  Added: boolean;
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Product = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 15rem;
    height: 20rem;
    background-color: ${theme.background.white};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

    @media (min-width: ${theme.screen.size.medium}) {
      width: 22rem;
      height: 30rem;
    }
    @media (min-width: ${theme.screen.size.large}) {
      width: 28rem;
      height: 40rem;
    } ;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 16.5rem;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    @media (min-width: ${theme.screen.size.medium}) {
      height: 26.5rem;
    }
    @media (min-width: ${theme.screen.size.large}) {
      height: 36.5rem;
    } ;
  `}
`;

export const Img = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    img {
      max-width: 30rem;
      height: 10rem;
      @media (min-width: ${theme.screen.size.medium}) {
        height: 10rem;
      }
      @media (min-width: ${theme.screen.size.large}) {
        height: 15rem;
      }
    }
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 50%;
    font-size: ${theme.fonts.size.xSmall};
  `}
`;

export const Name = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.xSmall};
    font-weight: 700;
    text-align: center;

    @media (min-width: ${theme.screen.size.medium}) {
      font-size: ${theme.fonts.size.small};
      padding-bottom: 1rem;
    }
    @media (min-width: ${theme.screen.size.large}) {
      font-size: ${theme.fonts.size.medium};
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.screen.size.medium}) {
      display: block;
    }
    @media (min-width: ${theme.screen.size.large}) {
      font-size: ${theme.fonts.size.small};
    }
  `}
`;

export const Price = styled.p`
  ${({ theme }) => css`
    padding-top: 1.2rem;
    text-align: end;

    @media (min-width: ${theme.screen.size.medium}) {
      padding-top: 3rem;
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: ${theme.fonts.size.small};
    }
    @media (min-width: ${theme.screen.size.large}) {
      font-size: ${theme.fonts.size.medium};
    }
  `}
`;

const ButtonStyles = {
  added: (theme: DefaultTheme) => css`
    background-color: ${theme.background.lightBlueColor};
    cursor: default;
  `,
};

export const Button = styled.button<CardStylesProps>`
  ${({ theme, Added }) => css`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border: none;
    cursor: pointer;
    background-color: ${theme.background.blueColor};
    svg {
      color: white;
    }
    ${Added ? ButtonStyles['added'](theme) : null}
  `}
`;
