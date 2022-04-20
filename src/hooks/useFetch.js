import { useQuery } from 'react-query';
import axios from 'axios';

const getData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

// eslint-disable-next-line arrow-body-style
const useFetch = (url, key) => {
  return useQuery(key, () => getData(url), {
    retry: 1,
    useErrorBoundary: true,
  });
};
export default useFetch;
