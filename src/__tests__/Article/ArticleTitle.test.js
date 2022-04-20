import { render, screen } from '@testing-library/react';

import ArticleTitle from '../../components/Article/ArticleTitle';

describe('ARTICLE TITLE COMPONENT', () => {
  test('Renders Article Title Component', () => {
    const text = 'hi there';
    render(<ArticleTitle title={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Renders Correct Article Title', () => {
    const text = 'Hey';
    render(<ArticleTitle title={text} />);

    expect(screen.getByText(text)).toHaveTextContent('Hey');
  });

  test('Renders Empty String If No Article Title Is Given', () => {
    const text = '';
    const testId = 'title-element';

    render(<ArticleTitle title={text} />);

    const titleElement = screen.getByTestId(testId);
    const titleElementLength = titleElement.textContent.length;

    expect(titleElementLength).toBe(0);
  });
});
