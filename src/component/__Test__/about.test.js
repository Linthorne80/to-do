import React from 'react';
import { render } from '@testing-library/react';
import About from './about'; // Import the actual component

test('renders about component', () => {
  const { getByText } = render(<About />);
  const element = getByText(/About Us/i);
  expect(element).toBeInTheDocument();
});

