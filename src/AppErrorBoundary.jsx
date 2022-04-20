import styled from 'styled-components';
import Button from './elements/Button';

const AppErrorBoundaryWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: var(--size16px);
  h1 {
    padding: var(--size16px) 0rem;
  }
  p {
    padding: var(--size16px) 0rem;
  }
`;

function AppErrorBoundary({ error, resetErrorBoundary }) {
  return (
    <AppErrorBoundaryWrapper>
      <h1>{error.message}</h1>
      <Button type="button" onClick={resetErrorBoundary} alignSelf="center">
        Retry
      </Button>
    </AppErrorBoundaryWrapper>
  );
}

export default AppErrorBoundary;
