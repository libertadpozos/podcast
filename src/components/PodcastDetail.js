import { Link, useParams} from 'react-router-dom';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
import useGetPodcastInfo from '../services/useGetPodcastInfo';
import EpisodesTable from './EpisodesTable';
import { useEffect, useState } from 'react';

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
      <Link className='characterCard-list-link third' to={'/'}> REGRESAR
      </Link>
      <p>Detalles Podcast for </p>
      {podcast && episodes &&
      <>
        <div>
          <Sidebar
            title={podcast['im:name'].label}
            author={podcast['im:artist'].label}
            description={podcast.summary.label}
            img={podcast['im:image'][0].label}
          />
        </div>
        <EpisodesTable episodes={episodes} podcastId={podcastId}/>
      </>
      }
    </div>
  );
}

export default PodcastDetail;

PodcastDetail.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool
};