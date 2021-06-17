import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders categories', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
    render(<HomePage />);
  });
});
