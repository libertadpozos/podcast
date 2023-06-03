import { Link, useParams} from 'react-router-dom';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
import useGetPodcastInfo from '../services/useGetPodcastInfo';
import EpisodesTable from './EpisodesTable';
import { useEffect, useState } from 'react';
import '../styles/PodcastDetail.css';

function PodcastDetail({data}) {
  const{podcastId} = useParams();
  const [podcast, setPodcast] = useState();

  const {data: episodes, loading} = useGetPodcastInfo(podcastId);

  useEffect(() => {
    if(!loading){
      const filteredPodcast= data.find((podcast)=>{
        return podcast.id.attributes['im:id'].includes(podcastId);
      });
      setPodcast(filteredPodcast);
    }
  }, [loading]);

  return (
    <div>
      <Link className='characterCard-list-link third' to={'/'}> go back
      </Link>
      {podcast && episodes &&
        <div className='podcast-detail-container'>
          <Sidebar
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