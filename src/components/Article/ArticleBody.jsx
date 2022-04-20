import PropTypes from 'prop-types';

import ReadMore from '../ReadMore/ReadMore';
import ArticleTitle from './ArticleTitle';

function ArticleBody({ body }) {
  const titleValue = body?.values[0];
  const paragraphValue = body?.values[1];

  return (
    <>
      <ArticleTitle title={titleValue} />
      <ReadMore text={paragraphValue} />
    </>
  );
}

ArticleBody.defaultProps = {
  body: { values: [{}, {}] },
};

ArticleBody.propTypes = {
  body: PropTypes.shape({
    values: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ArticleBody;
