
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../helpers/formatDate';
import formatTime from '../helpers/formatTime';

function EpisodesTable({episodes, podcastId}) {
  return (
    <div>
      <div>Episodes {episodes.resultCount} </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {episodes.results.map((episode) => (
            <tr key={episode.trackId}>
              <td><Link key={episode.trackId} to={`/podcast/${podcastId}/episode/${episode.trackId}`}>{episode.trackName} </Link></td>
              <td>{formatDate(episode.releaseDate)}</td>
              <td>{formatTime(episode.trackTimeMillis)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EpisodesTable;

EpisodesTable.propTypes = {
  episodes: PropTypes.object,
  podcastId: PropTypes.string
};