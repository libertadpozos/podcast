import useFetchData from '../services/useFetchData';

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
                  <img alt={podcast['im:name'].label} src={podcast['im:image'][0].label} />
                  <p>{podcast['im:name'].label}</p>
                  <p>Author: {podcast['im:artist'].label}</p>
                </li>
              ))}
          </ul>
        )
      }
    </>
  );
}

export default PodcastList;