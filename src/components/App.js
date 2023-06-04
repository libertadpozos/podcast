import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useFetchData from '../services/useFetchData';
import '../styles/App.css';
import PodcastList from './PodcastList';
import PodcastDetail from './PodcastDetail';
import EpisodeDetail from './EpisodeDetail';
import Header from './Header';

function App() {
  const { data, loading } = useFetchData();

  return (
    <Router>
      <div >
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<PodcastList data={data} loading={loading}/>} />
          </Routes>
          <Routes>
            <Route path='/podcast/:podcastId' element={<PodcastDetail data={data} />} />
          </Routes>
          <Routes>
            <Route path='/podcast/:podcastId/episode/:episodeId' element={<EpisodeDetail data={data} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
