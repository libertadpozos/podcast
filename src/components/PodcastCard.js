import PropTypes from 'prop-types';

function PodcastCard({podcast}) {
  return (
    <>
      <img alt={podcast['im:name'].label} src={podcast['im:image'][0].label} />
      <p>{podcast['im:name'].label}</p>
      <p>Author: {podcast['im:artist'].label}</p>
    </> );
}

export default PodcastCard;

PodcastCard.propTypes = {
  podcast: PropTypes.object
};