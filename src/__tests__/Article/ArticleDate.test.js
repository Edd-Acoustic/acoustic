import { render, screen } from '@testing-library/react';

import ArticleDate from '../../components/Article/ArticleDate';
import { articleStateMock } from '../../utils/TestUtils';

describe('ARTICLE DATE COMPONENT', () => {
  test('Renders Article Date Component', () => {
    const {
      elements: { date },
    } = articleStateMock;
    const testId = 'date-element';
    render(<ArticleDate date={date} />);
    const dateElement = screen.getByTestId(testId);

    expect(dateElement).toBeInTheDocument();
  });

  test('Renders Correct Date Format', () => {
    const {
      elements: { date },
    } = articleStateMock;
    const testId = 'date-element';
    render(<ArticleDate date={date} />);
    const dateElement = screen.getByTestId(testId);

    expect(dateElement).toHaveTextContent('2020-09-07');
  });
});
