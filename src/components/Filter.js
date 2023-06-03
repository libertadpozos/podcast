import PropTypes from 'prop-types';
import '../styles/Filter.css';

function Filter({filterInput, onFilterChange}) {

  return (
    <div >
      <label htmlFor='textFilter' aria-label='text filter' />
      <input
        type='text'
        id='textFilter'
        name='textFilter'
        value={filterInput}
        placeholder='Filter podcasts'
        className="filter"
        onChange={(e) => onFilterChange(e)}
      />
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  filterInput: PropTypes.string,
  onFilterChange: PropTypes.func
};