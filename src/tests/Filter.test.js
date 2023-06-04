import { render, screen, fireEvent } from '@testing-library/react';
import PodcastList from '../components/PodcastList';
import { BrowserRouter as Router } from 'react-router-dom';
import data from './mockData';

describe('Filter', () => {
  test('filters the list when input value changes', () => {
    render(
      <Router>
        <PodcastList data={data} loading={false} />
      </Router>
    );

    const inputElement = screen.getByPlaceholderText('Filter podcasts');

    fireEvent.change(inputElement, { target: { value: 'Jo' } });

    const filteredItems = screen.getAllByTestId('list-item');

    expect(filteredItems.length).toBe(1);

    expect(screen.getByText('The Joe Budden Podcast')).toBeInTheDocument();
  });
});