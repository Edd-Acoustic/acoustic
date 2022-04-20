/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const Time = styled(Moment).attrs((props) => ({
  'data-testid': props['data-testid'],
}))`
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : 'flex-start')};
  padding: 0.2rem 0rem;
  width: fit-content;
`;

function Date({ alignSelf, text, ...props }) {
  return (
    <Time
      format="YYYY-MM-DD"
      data-testid="date-element"
      style={{ alignSelf }}
      {...props}
    >
      {text}
    </Time>
  );
}

Date.defaultProps = {
  text: '',
};

Date.propTypes = {
  text: PropTypes.string,
};

export default Date;
