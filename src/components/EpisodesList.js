
import PropTypes from 'prop-types';

function EpisodesList({episodes}) {
  return (
    <div>
      <div>Episodes {episodes.resultCount} </div>
      <ul>
        {/* <li key={}></li> */}
      </ul>
    </div>
  );
}

export default EpisodesList;

EpisodesList.propTypes = {
  episodes: PropTypes.object,
};