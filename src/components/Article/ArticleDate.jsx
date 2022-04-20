/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

import Date from '../../elements/Date';

function ArticleDate({ date, ...props }) {
  return <Date alignSelf="flex-end" text={date?.value ?? ''} {...props} />;
}

ArticleDate.defaultProps = {
  date: { value: '' },
};

ArticleDate.propTypes = {
  date: PropTypes.shape({
    value: PropTypes.string,
  }),
};

export default ArticleDate;
