import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Header from './index';

describe('<Header />', () => {
  it('should render', () => {
    const header = renderTheme(<Header number={0} />);
    expect(header).toMatchSnapshot;
  });
});
