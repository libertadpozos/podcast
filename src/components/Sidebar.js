import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar({id, title, author, description, img}) {
  return (
    <div className="sidebar-card">
      <Link to={`/podcast/${id}`}>
        <img className="sidebar-image" alt={title} src={img} />
      </Link>
      <Link to={`/podcast/${id}`}>
        <p className="sidebar-title">{title}</p>
      </Link>
      <div className="sidebar-description">
        <Link to={`/podcast/${id}`}>
          <p>by {author}</p>
        </Link>
        <p>Description: </p>
        <p>{ description} </p>
      </div>
    </div>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string
};