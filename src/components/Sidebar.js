import PropTypes from 'prop-types';

function Sidebar({title, author, description, img}) {
  return (
    <div>
      <img alt={title} src={img} />
      <p>{title}</p>
      <p>by {author}</p>
      <p>Description: </p>
      <p>{ description} </p>
    </div>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string
};