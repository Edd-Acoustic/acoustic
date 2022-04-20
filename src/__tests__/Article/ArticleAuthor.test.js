import { render, screen } from '@testing-library/react';

import ArticleAuthor from '../../components/Article/ArticleAuthor';

describe('ARTICLE AUTHOR COMPONENT', () => {
  test('Renders Given Author', () => {
    const author = { value: 'Jane Doe' };

    render(<ArticleAuthor author={author} />);

    const authorElement = screen.getByText(author.value);
    const authorElementLength = authorElement.textContent.length;

    expect(authorElementLength).toBe(8);
  });

  test('Renders Empty String If No Author Is Given', () => {
    const author = { value: '' };
    const testId = 'author-element';

    render(<ArticleAuthor author={author} />);

    const authorElement = screen.getByTestId(testId);
    const authorElementLength = authorElement.textContent.length;

    expect(authorElementLength).toBe(0);
  });

  test('Renders Empty String If Author Is Undefined', () => {
    const author = undefined;
    const testId = 'author-element';

    render(<ArticleAuthor author={author} />);

    const authorElement = screen.getByTestId(testId);
    const authorElementLength = authorElement.textContent.length;

    expect(authorElementLength).toBe(0);
  });
});
