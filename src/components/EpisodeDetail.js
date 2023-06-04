import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../services/useFetchData';
import useGetPodcastInfo from '../services/useGetPodcastInfo';
import Sidebar from './Sidebar';
import EpisodeReproduction from './EpisodeReproduction';
import Loading from './Loading';
import '../styles/EpisodeDetail.css';

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
    <div className='episode-detail-container'>
      {loading && <Loading />}
      { podcast &&
          <Sidebar
            id={podcast.id.attributes['im:id']}
            title={podcast['im:name'].label}
            author={podcast['im:artist'].label}
            description={podcast.summary.label}
            img={podcast['im:image'][2].label}
          />
      }
      {episode &&
          <EpisodeReproduction
            title={episode.trackName}
            description={episode.description}
            reproductionURl={episode.episodeUrl}
          />
      }
    </div>

  );
}

export default EpisodeDetail;