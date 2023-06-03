
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../helpers/formatDate';
import formatTime from '../helpers/formatTime';
import '../styles/EpisodesTable.css';

function EpisodesTable({episodes, podcastId}) {
  return (
    <div className='episode-table-container'>
      <div className='episode-table-number'><span>Episodes {episodes.resultCount}</span> </div>
      <div className='episode-table-block'>
        <table className="episode-table">
          <thead>
            <tr className='episode-table__row--header'>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {episodes.results.map((episode) => (
              <tr className='episode-table__row' key={episode.trackId}>
                <td className='episode-table__cell'><Link className='episode-table__cell--link' key={episode.trackId} to={`/podcast/${podcastId}/episode/${episode.trackId}`}>{episode.trackName} </Link></td>
                <td className='episode-table__cell'>{formatDate(episode.releaseDate)}</td>
                <td className='episode-table__cell'>{formatTime(episode.trackTimeMillis)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EpisodesTable;

EpisodesTable.propTypes = {
  episodes: PropTypes.object,
  podcastId: PropTypes.string
};