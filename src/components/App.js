import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useFetchData from '../services/useFetchData';
import '../styles/App.css';
import PodcastList from './PodcastList';
import PodcastDetail from './PodcastDetail';
import EpisodeDetail from './EpisodeDetail';

function App() {
  const { data, loading } = useFetchData();

  return (
    <Router>
      <div >
        <header>
          <h1>Podcaster</h1>
        </header>
        <main>

          <Routes>
            <Route path='/' element={<PodcastList data={data} loading={loading}/>} />
          </Routes>
          <Routes>
            <Route path='/podcast/:podcastId' element={<PodcastDetail data={data}/>} />
          </Routes>
          <Routes>
            <Route path='/podcast/:podcastId/episode/:episodeId' element={<EpisodeDetail data={data}/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
