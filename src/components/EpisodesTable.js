
import PropTypes from 'prop-types';
import formatDate from '../helpers/formatDate';
import formatTime from '../helpers/formatTime';

function EpisodesTable({episodes}) {
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
              <td>{episode.trackName}</td>
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
};