/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

import Author from '../../elements/Author';

function ArticleAuthor({ author, ...props }) {
  return <Author alignSelf="flex-end" text={author?.value ?? ''} {...props} />;
}

ArticleAuthor.defaultProps = {
  author: { value: '' },
};

ArticleAuthor.propTypes = {
  author: PropTypes.shape({
    value: PropTypes.string,
  }),
};

export default ArticleAuthor;
