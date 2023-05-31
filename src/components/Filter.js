import PropTypes from 'prop-types';

function Filter({filterInput, onFilterChange}) {

  return (
    <div>
      <label htmlFor='textFilter' aria-label='text filter' />
      <input
        type='text'
        id='textFilter'
        name='textFilter'
        value={filterInput}
        placeholder='Type to search'
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