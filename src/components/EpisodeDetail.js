import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../services/useFetchData';
import useGetPodcastInfo from '../services/useGetPodcastInfo';
import Sidebar from './Sidebar';
import EpisodeReproduction from './EpisodeReproduction';

function EpisodeDetail() {
  const{podcastId, episodeId }= useParams();
  const [podcast, setPodcast] = useState();
  const [episode, setEpisode] = useState();

  const { data: episodes, loading } = useGetPodcastInfo(podcastId);
  const { data: podcasts }= useFetchData();

  useEffect(() => {
    if(!loading){
      const filteredEpisode= episodes.results.find((episode)=>{
        return episode.trackId === parseInt(episodeId);
      });
      const filteredPodcast= podcasts.find((podcast)=>{
        return podcast.id.attributes['im:id'].includes(podcastId);
      });
      setPodcast(filteredPodcast);
      setEpisode(filteredEpisode);

    }
  }, [loading]);

  return (
    <>
      <p>Episode Detail</p>
      { podcast &&
        <div>
          <Sidebar
            title={podcast['im:name'].label}
            author={podcast['im:artist'].label}
            description={podcast.summary.label}
            img={podcast['im:image'][0].label}
          />
        </div>
      }
      {episode &&
          <EpisodeReproduction
            title={episode.trackName}
            description={episode.description}
            reproductionURl={episode.episodeUrl}
          />
      }
    </>

  );
}

export default EpisodeDetail;