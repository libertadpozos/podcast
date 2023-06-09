import { useParams} from 'react-router-dom';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
import useGetPodcastInfo from '../services/useGetPodcastInfo';
import EpisodesTable from './EpisodesTable';
import Loading from './Loading';
import { useEffect, useState } from 'react';
import '../styles/PodcastDetail.css';

function PodcastDetail({data}) {
  const{podcastId} = useParams();
  const [podcast, setPodcast] = useState();

  const {data: episodes, loading} = useGetPodcastInfo(podcastId);

  useEffect(() => {
    if(!loading){
      const filteredPodcast = data.find((podcast)=>{
        return podcast.id.attributes['im:id'].includes(podcastId);
      });
      setPodcast(filteredPodcast);
    }
  }, [loading]);

  return (
    <div>
      {loading && <Loading />}
      {podcast && episodes &&
        <div className='podcast-detail-container'>
          <Sidebar
            id={podcast.id.attributes['im:id']}
            title={podcast['im:name'].label}
            author={podcast['im:artist'].label}
            description={podcast.summary.label}
            img={podcast['im:image'][2].label}
          />

          <EpisodesTable episodes={episodes} podcastId={podcastId}/>
        </div>
      }
    </div>
  );
}

export default PodcastDetail;

PodcastDetail.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool
};