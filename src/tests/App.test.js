import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders title', () => {
  render(<App />);
  const title = screen.getByText(/Podcaster/i);
  expect(title).toBeInTheDocument();
});
