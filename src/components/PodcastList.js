import { useState } from 'react';
import useFetchData from '../services/useFetchData';
import PodcastCard from './PodcastCard';
import Filter from './Filter';

function PodcastList() {
  const { data, loading } = useFetchData();
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
                    <PodcastCard podcast={podcast}/>
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