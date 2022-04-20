import { render, screen } from '@testing-library/react';

import ArticleImage from '../../components/Article/ArticleImage';
import { articleStateMock } from '../../utils/TestUtils';

describe('ARTICLE IMAGE COMPONENT', () => {
  test('Renders Article Image Component', () => {
    const imageId = 'image-element';
    const {
      elements: { mainImage },
    } = articleStateMock;
    render(<ArticleImage mainImage={mainImage} />);

    expect(screen.getByTestId(imageId)).toBeInTheDocument();
  });
});
