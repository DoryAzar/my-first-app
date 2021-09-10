import { render, screen } from '@testing-library/react';
import App from './App';

test('my name', () => {
  render(<App />);
  const myname = screen.getByText(/Dory Azar/i);
  expect(myname).toBeInTheDocument();
});
