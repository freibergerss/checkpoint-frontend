import { render, screen } from '@testing-library/react';
import Login from '../../../Routes/Login';

test('should show login form', () => {
  render(<Login />)
  expect(screen.getByText("Login")).toBeInTheDocument();
});
