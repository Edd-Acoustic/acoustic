import styled from 'styled-components';
import PropTypes from 'prop-types';

import ArticleAuthor from './ArticleAuthor';
import ArticleBody from './ArticleBody';
import ArticleHeading from './ArticleHeading';
import ArticleImage from './ArticleImage';
import ArticleDate from './ArticleDate';
import device from '../../utils/Devices';
import { articleStateMock } from '../../utils/TestUtils';

const StyledArticle = styled.article`
  background: linear-gradient(
    304deg,
    var(--gradient-one),
    var(--gradient-two),
    var(--gradient-three)
  );
  border-radius: 5rem 5rem var(--size16px) var(--size16px);
  display: flex;
  flex-direction: column;
  margin: var(--size16px);
  min-height: 42rem;

  @media ${device.laptop} {
    background: linear-gradient(
      12deg,
      var(--gradient-one),
      var(--gradient-two),
      var(--gradient-three)
    );
    border-radius: var(--size16px) 5rem 5rem var(--size16px);
    flex-direction: row-reverse;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
  width: 100%;

  @media ${device.laptop} {
    padding: calc(var(--size32px) * 2);
  }
`;

/**
 * Function that renders a single article,
 * it can be used to render a list of acticles.
 * @param Object Single Article.
 * @returns JSX Element.
 */
function Article({ articleState }) {
  if (!articleState || !articleState.elements) {
    return null;
  }

  // eslint-disable-next-line object-curly-newline
  const { author, body, date, mainImage, heading } = articleState.elements;

  return (
    <StyledArticle data-testid="article-component" key={articleState.id}>
      <ArticleImage mainImage={mainImage} />
      <Wrapper>
        <ArticleHeading heading={heading} />
        <ArticleAuthor author={author} />
        <ArticleBody body={body} />
        <ArticleDate date={date} />
      </Wrapper>
    </StyledArticle>
  );
}

Article.defaultProps = {
  articleState: articleStateMock,
};

Article.propTypes = {
  articleState: PropTypes.shape({
    id: PropTypes.string,
    elements: PropTypes.shape({
      author: PropTypes.shape({
        value: PropTypes.string,
      }),
      body: PropTypes.shape({
        values: PropTypes.arrayOf(PropTypes.string),
      }),
      date: PropTypes.shape({
        value: PropTypes.string,
      }),
      heading: PropTypes.shape({
        value: PropTypes.string,
      }),

      mainImage: PropTypes.shape({
        value: PropTypes.shape({
          leadImageCaption: PropTypes.shape({
            value: PropTypes.string,
          }),
          leadImage: PropTypes.shape({
            renditions: PropTypes.shape({
              card: PropTypes.shape({
                height: PropTypes.number,
                width: PropTypes.number,
                source: PropTypes.string,
                url: PropTypes.string,
              }),
              default: PropTypes.shape({
                height: PropTypes.number,
                source: PropTypes.string,
                url: PropTypes.string,
                width: PropTypes.number,
              }),
              lead: PropTypes.shape({
                height: PropTypes.number,
                width: PropTypes.number,
                url: PropTypes.string,
                source: PropTypes.string,
              }),
            }),
          }),
        }),
      }),
    }),
  }),
};

export default Article;
