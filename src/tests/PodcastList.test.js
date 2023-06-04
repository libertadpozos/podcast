import { render, screen } from '@testing-library/react';
import PodcastList from '../components/PodcastList';
import { BrowserRouter as Router } from 'react-router-dom';
import data from './mockData';

describe('PodcastList', () => {
  test('shows loading', () => {
    render(
      <Router>
        <PodcastList data={data} loading={true} />
      </Router>
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});

test('renders a list of items', () => {
  render(
    <Router>
      <PodcastList data={data} loading={false} />
    </Router>
  );

  const renderedItems = screen.getAllByTestId('list-item');

  expect(renderedItems.length).toBe(2);

});
