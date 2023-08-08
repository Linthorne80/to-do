import React from 'react';
import { render } from '@testing-library/react';
import Home from './home'; // Import the actual component

test('renders home component', () => {
  const { getByText } = render(<Home />);
  const element = getByText(/Welcome to the Home Page/i);
  expect(element).toBeInTheDocument();
});

