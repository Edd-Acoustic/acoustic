import {
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ErrorBoundary } from 'react-error-boundary';

import AppErrorBoundary from './AppErrorBoundary';
import Home from './pages/Home';
import './index.css';

const queryClient = new QueryClient();

function App() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary FallbackComponent={AppErrorBoundary} onReset={reset}>
      <QueryClientProvider client={queryClient}>
        <Home />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
