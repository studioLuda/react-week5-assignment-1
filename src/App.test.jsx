import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

describe('App', () => {
  it('renders categories', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));
    render(<App />);
  });
});
