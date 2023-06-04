import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PodcastCard from './PodcastCard';
import Filter from './Filter';
import  '../styles/PodcastList.css';

function PodcastList({data, loading}) {
  const [filterInput, setFilterInput] = useState('');
  console.log('data', data);
  const onFilterChange=(e)=>{
    setFilterInput(e.target.value);
  };

  return (
    <>
      {loading ? <p> Loading... </p>
        : (
          <>
            <Filter filterInput={filterInput} onFilterChange={onFilterChange}/>
            <ul className='podcast-list-container__list'>
              {  data
                .filter((podcast) => podcast['im:name'].label.toLowerCase().includes(filterInput.toLowerCase()))
                .map((podcast) => (
                  <li key={podcast.id.attributes['im:id']} className='podcast-list-container__list-item' data-testid='list-item'>
                    <Link to={`/podcast/${podcast.id.attributes['im:id']}`}>
                      <PodcastCard podcast={podcast} />
                    </Link>
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
  data: PropTypes.array,
  loading: PropTypes.bool
};