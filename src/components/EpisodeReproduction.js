import PropTypes from 'prop-types';

function EpisodeReproduction({title, description, reproductionURl}) {
  return (
    <div>
      <p>{title}</p>
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