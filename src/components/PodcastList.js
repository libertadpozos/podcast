import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PodcastCard from './PodcastCard';
import Filter from './Filter';

function PodcastList({data, loading}) {
  const [filterInput, setFilterInput] = useState('');

  const onFilterChange=(e)=>{
    setFilterInput(e.target.value);
  };

  return (
    <>
      {loading ? <p> Loading... </p>
        : (
          <>
            <Filter filterInput={filterInput} onFilterChange={onFilterChange}/>
            <ul>
              {  data
                .filter((podcast) => podcast['im:name'].label.toLowerCase().includes(filterInput.toLowerCase()))
                .map((podcast) => (
                  <li key={podcast.id.attributes['im:id']}>
                    <Link to={`/podcast/${podcast.id.attributes['im:id']}}`}><PodcastCard podcast={podcast}/></Link>
                  </li>
                ))}
            </ul>
          </>
        )
      }
    </>
  );
}

export default PodcastList;

PodcastList.propTypes = {
  data: PropTypes.obj,
  loading: PropTypes.bool
};