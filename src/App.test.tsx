import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello message', () => {
  render(<App />);
  const heading = screen.getByText(/Hello, CodeRabbit/i);
  expect(heading).toBeInTheDocument();
});
