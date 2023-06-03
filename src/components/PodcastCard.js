import PropTypes from 'prop-types';
import '../styles/PodcastCard.css';

function PodcastCard({podcast}) {
  return (

    <div className='card'>
      <img className='card-image' alt={podcast['im:name'].label} src={podcast['im:image'][1].label} />
      <div className='card-description'>
        <p>{podcast['im:name'].label}</p>
        <p>Author: {podcast['im:artist'].label}</p>
      </div>
    </div>
  );
}

export default PodcastCard;

PodcastCard.propTypes = {
  podcast: PropTypes.object
};