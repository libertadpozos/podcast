import useFetchData from '../services/useFetchData';
import PodcastCard from './PodcastCard';
import Filter from './Filter';
import { useState } from 'react';

function PodcastList() {
  const { data, loading } = useFetchData();
  const [filterInput, setFilterInput] = useState();

  const onFilterChange=(e)=>{
    setFilterInput(e.target.value);
  };

  const filteredList=  data.feed.entry.filter((podcast) => podcast['im:name'].label.toLowerCase().includes(filterInput.toLowerCase()));

  return (
    <>
      {loading ? <p> Loading... </p>
        : (
          <>
            <Filter filterInput={filterInput} onFilterChange={onFilterChange}/>
            <ul>
              { filteredList
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