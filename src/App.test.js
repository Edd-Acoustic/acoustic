import { render, screen } from '@testing-library/react';
import axios from 'axios';

import App from './App';

describe('APP COMPONENT', () => {
  afterAll(() => {
    axios.CancelToken.source();
  });

  test('Renders Article Component', async () => {
    render(<App />);

    const articleElement = screen.findByText('Hey there');
    expect(await articleElement).toBeInTheDocument();
  });
});
