import { render, screen, fireEvent } from '@testing-library/react';

import ReadMore from '../../components/ReadMore/ReadMore';
import { text } from '../../utils/TestUtils';

describe('READ MORE', () => {
  beforeEach(() => {
    render(<ReadMore text={text} />);
  });

  test('Renders First 233 Characters', () => {
    const buttonElement = screen.getByRole('button');
    const textElement = buttonElement.previousSibling.firstChild;
    const textElementContext = textElement.textContent;
    const textElementContextLength = textElementContext.length;

    expect(textElementContextLength).toBe(233);
  });

  test('Renders More Than 233 Characters After First Button Click', () => {
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);
    const textElement = buttonElement.previousSibling.firstChild;
    const textElementContext = textElement.textContent;
    const textElementContextLength = textElementContext.length;

    expect(textElementContextLength).toBeGreaterThan(233);
  });

  test('Renders No More Than 233 Characters After Second Button Click', () => {
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    const textElement = buttonElement.previousSibling.firstChild;
    const textElementContext = textElement.textContent;
    const textElementContextLength = textElementContext.length;

    expect(textElementContextLength).toBe(233);
  });

  test('Button Text Changes From Read More To Show Less', () => {
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect(buttonElement).toHaveTextContent('Show Less');
  });
});
