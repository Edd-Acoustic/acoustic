/* eslint-disable object-curly-newline */
import { useErrorHandler } from 'react-error-boundary';
import { SpinnerCircular } from 'spinners-react';

import Article from '../components/Article/Article';
import Layout from '../containers/Layout/Layout';

import useFetch from '../hooks/useFetch';
import { ARTICLE_API } from '../utils/Routes';

function Home() {
  const handleError = useErrorHandler();
  const { data, status, isError, error } = useFetch(ARTICLE_API, 'article');

  if (status === 'loading') {
    return (
      <Layout>
        <SpinnerCircular style={{ alignSelf: 'center' }} />
      </Layout>
    );
  }

  if (isError) {
    handleError(error);
  }

  return <Layout>{!!data && <Article articleState={data} />}</Layout>;
}

export default Home;
