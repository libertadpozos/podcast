import { useEffect, useState } from 'react';

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
      if (response.ok) {
        const data = await response.json();
        const podcastsData = data.feed.entry;
        setData(podcastsData);
        localStorage.setItem('podcastsData', JSON.stringify(podcastsData));
        localStorage.setItem('podcastsTimestamp', new Date().getTime());
        setLoading(false);
      } else {
        console.log('Error:', response.status);
        setErrorMessage(response.status);
        setLoading(false);
      }
    } catch (error) {
      console.log('Error:', error.message);
      setErrorMessage(error.message);
      setLoading(false);
      ;
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem('podcastsData');
    const storedTimestamp = localStorage.getItem('podcastsTimestamp');
    const currentTime = new Date().getTime();
    const oneDayInMillis = 24 * 60 * 60 * 1000;

    if (storedData && storedTimestamp && currentTime - storedTimestamp < oneDayInMillis) {
      setData(JSON.parse(storedData));
      setLoading(false);
    } else {
      fetchData();
    }
  }, []);
  return { data, loading, errorMessage };
};

export default useFetchData;
