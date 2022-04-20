import { render, screen } from '@testing-library/react';

import ArticleBody from '../../components/Article/ArticleBody';
import { articleStateMock } from '../../utils/TestUtils';

describe('ARTICLE-BODY COMPONENT', () => {
  test('Renders Acticle Body Component', () => {
    const {
      elements: { body },
    } = articleStateMock;
    render(<ArticleBody body={body} />);
    const titleElement = screen.getByTestId('title-element');
    const buttonElement = screen.getByText('Read More');

    expect(titleElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
