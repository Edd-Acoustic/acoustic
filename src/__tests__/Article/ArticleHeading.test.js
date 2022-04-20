import { render, screen } from '@testing-library/react';

import ArticleHeading from '../../components/Article/ArticleHeading';

describe('ARTICLE HEADING COMPONENT', () => {
  test('Renders Article Heading Component', () => {
    const heading = { value: 'Hi there' };
    render(<ArticleHeading heading={heading} />);

    expect(screen.getByText(heading.value)).toBeInTheDocument();
  });

  test('Renders Correct Article Heading', () => {
    const heading = { value: 'Hey' };
    render(<ArticleHeading heading={heading} />);

    expect(screen.getByText(heading.value)).toHaveTextContent('Hey');
  });

  test('Renders Empty String If No Article Heading Is Given', () => {
    const heading = {};
    const testId = 'heading-element';

    render(<ArticleHeading heading={heading} />);

    const headingElement = screen.getByTestId(testId);
    const headingElementLength = headingElement.textContent.length;

    expect(headingElementLength).toBe(0);
  });
});
