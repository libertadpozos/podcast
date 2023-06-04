import { render, screen } from '@testing-library/react';
import App from '../components/App';
import fetchMock from 'jest-fetch-mock';

jest.mock('./mockApi');

describe('App', () => {
  beforeEach(() => {
    fetchMock.enableMocks();
  });

  test('renders title', () => {
    render(<App />);
    const title = screen.getByText(/Podcaster/i);
    expect(title).toBeInTheDocument();
  });
});
