/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

import Title from '../../elements/Title';

function ArticleTitle({ title, ...props }) {
  return <Title text={title ?? ''} {...props} />;
}

ArticleTitle.defaultProps = {
  title: '',
};

ArticleTitle.propTypes = {
  title: PropTypes.string,
};

export default ArticleTitle;
