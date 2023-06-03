import PropTypes from 'prop-types';
import '../styles/EpisodeReproduction.css';

function EpisodeReproduction({title, description, reproductionURl}) {
  return (
    <div className='episode-reproduction-container'>
      <p className='episode-reproduction-title'>{title}</p>
      <p>{description}</p>
      <audio controls>
        <source src={reproductionURl} type="audio/mpeg" />
          Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default EpisodeReproduction;

EpisodeReproduction.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  reproductionURl: PropTypes.string,
};