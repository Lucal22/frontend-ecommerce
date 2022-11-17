import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Heading from './index';

describe('<Heading />', () => {
  it('should render with default values', () => {
    const heading = renderTheme(<Heading>Olá mundo</Heading>);
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(heading).toMatchSnapshot();
  });

  it('should render with small size', () => {
    const heading = renderTheme(
      <Heading color={'white'} size={'small'} as={'h1'}>
        Olá mundo
      </Heading>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(heading).toMatchSnapshot();
  });

  it('should render with medium size', () => {
    const heading = renderTheme(
      <Heading color={'black'} size={'medium'} as={'h2'}>
        Olá mundo
      </Heading>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(heading).toMatchSnapshot();
  });

  it('should render with big size', () => {
    const heading = renderTheme(
      <Heading color={'black'} size={'big'} as={'h3'}>
        Olá mundo
      </Heading>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(heading).toMatchSnapshot();
  });

  it('should render with xBig size', () => {
    const heading = renderTheme(
      <Heading color={'black'} size={'xBig'} as={'h1'}>
        Olá mundo
      </Heading>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(heading).toMatchSnapshot();
  });

  it('should render with large size', () => {
    const heading = renderTheme(
      <Heading color={'black'} size={'large'} as={'h2'}>
        Olá mundo
      </Heading>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(heading).toMatchSnapshot();
  });

  it('should render with size null', () => {
    const heading = renderTheme(
      <Heading color={'black'} size={null} as={'h2'}>
        Olá mundo
      </Heading>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(heading).toMatchSnapshot();
  });
});
