import React from 'react';
import { render } from '@testing-library/react';
import Services from './services'; // Import the actual component

test('renders services component', () => {
  const { getByText } = render(<Services />);
  const element = getByText(/Our Services/i);
  expect(element).toBeInTheDocument();
});