import { useEffect, useState } from 'react';

const useGetPodcastInfo = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = async (id) => {
    try {
      const response = await fetch(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`);
      if (response.ok) {
        const data = await response.json();
        const podcastsData = data;
        setData(podcastsData);
        localStorage.setItem('podcastsDetailData', JSON.stringify(podcastsData));
        localStorage.setItem('podcastsDetailTimestamp', new Date().getTime());
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
    const storedData = localStorage.getItem('podcastsDetailData');
    const storedTimestamp = localStorage.getItem('podcastsDetailTimestamp');
    const currentTime = new Date().getTime();
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    if (storedData && storedTimestamp && currentTime - storedTimestamp < oneDayInMillis) {
      setData(JSON.parse(storedData));
      setLoading(false);
    } else {
      fetchData(id.replace('}', ''));
    }
    fetchData(id.replace('}', ''));
  }, [id]);
  return { data, loading, errorMessage };
};

export default useGetPodcastInfo;
