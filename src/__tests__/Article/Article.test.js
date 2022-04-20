import { render, screen } from '@testing-library/react';

import Article from '../../components/Article/Article';
import { articleStateMock } from '../../utils/TestUtils';

describe('ARTICLE COMPONENT', () => {
  beforeEach(() => {
    render(<Article articleState={articleStateMock} />);
  });

  test('Renders Article Component', () => {
    const articleElement = screen.getByTestId('article-component');
    expect(articleElement).toBeInTheDocument();
  });

  test('Renders Article-Author Sub-Component', () => {
    const authorId = 'author-element';
    const authorElement = screen.getByTestId(authorId);

    expect(authorElement).toBeInTheDocument();
  });

  test('Renders Article-Date Sub-Component', () => {
    const dateId = 'date-element';
    const dateElement = screen.getByTestId(dateId);

    expect(dateElement).toBeInTheDocument();
  });

  test('Renders Article-Heading Sub-Component', () => {
    const headingId = 'heading-element';
    const headingElement = screen.getByTestId(headingId);

    expect(headingElement).toBeInTheDocument();
  });

  test('Renders Article-Heading Sub-Component', () => {
    const titleId = 'title-element';
    const titleElement = screen.getByTestId(titleId);

    expect(titleElement).toBeInTheDocument();
  });

  test('Renders Readmore Button Sub Component', () => {
    const buttonElement = screen.getByText('Read More');
    expect(buttonElement).toBeInTheDocument();
  });
});
