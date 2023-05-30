import { useEffect, useState } from 'react';

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
        const data = await response.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        setLoading(false);
        setErrorMessage(error);
      }
    }

    getData();
  }, []);
  return { data, loading, errorMessage };
};

export default useFetchData;
