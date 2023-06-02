import { Link, useParams} from 'react-router-dom';

import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
import useGetPodcastInfo from '../services/useGetPodcastInfo';
import EpisodesTable from './EpisodesTable';

function PodcastDetail({data}) {
  const{podcastId}= useParams();

  function removeClosingBrace(str) {
    return str.replace('}', '');
  }

  const { data: episodes } = useGetPodcastInfo(podcastId);


  const filteredPodcast= data.find((podcast)=>{
    return podcast.id.attributes['im:id'].includes(removeClosingBrace(podcastId));
  });


  return (
    <div>
      <Link className='characterCard-list-link third' to={'/'}> REGRESAR
      </Link>
      <p>Detalles Podcast for </p>
      {filteredPodcast && episodes &&
      <>
        <div>
          <Sidebar
            title={filteredPodcast['im:name'].label}
            author={filteredPodcast['im:artist'].label}
            description={filteredPodcast.summary.label}
            img={filteredPodcast['im:image'][0].label}
          />
        </div>
        <EpisodesTable  episodes={episodes}/>
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