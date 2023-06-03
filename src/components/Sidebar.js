import PropTypes from 'prop-types';
import '../styles/Sidebar.css';

function Sidebar({title, author, description, img}) {
  return (
    <div className="sidebar-card">
      <img className="sidebar-image" alt={title} src={img} />
      <p className="sidebar-title">{title}</p>
      <div className="sidebar-description">
        <p>by {author}</p>
        <p>Description: </p>
        <p>{ description} </p>
      </div>
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