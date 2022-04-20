import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeading = styled.h2`
  color: var(--light-gray);
`;

function Heading({ text }) {
  return <StyledHeading data-testid="heading-element">{text}</StyledHeading>;
}

Heading.defaultProps = {
  text: '',
};

Heading.propTypes = {
  text: PropTypes.string,
};

export default Heading;
