import useFetchData from '../services/useFetchData';
import PodcastCard from './PodcastCard';

function PodcastList() {
  const { data, loading } = useFetchData();
  return (
    <>
      {loading ? <p> Loading... </p>
        : (
          <ul>
            {data.feed.entry
              .map((podcast) => (
                <li key={podcast.id.attributes['im:id']}>
                  <PodcastCard podcast={podcast}/>
                </li>
              ))}
          </ul>
        )
      }
    </>
  );
}

export default PodcastList;