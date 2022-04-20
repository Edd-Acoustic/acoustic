/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

import Heading from '../../elements/Heading';

function ArticleHeading({ heading, ...props }) {
  return <Heading text={heading?.value ?? ''} {...props} />;
}

ArticleHeading.defaultProps = {
  heading: { value: '' },
};

ArticleHeading.propTypes = {
  heading: PropTypes.shape({
    value: PropTypes.string,
  }),
};

export default ArticleHeading;
