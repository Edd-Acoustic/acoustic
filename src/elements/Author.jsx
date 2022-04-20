/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledAuthor = styled.span`
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : 'flex-start')};
  color: black;
  font-size: var(--size19px);
  padding: 0.1rem;
`;

function Author({ text, alignSelf, ...props }) {
  return (
    <StyledAuthor data-testid="author-element" alignSelf={alignSelf} {...props}>
      {text}
    </StyledAuthor>
  );
}

Author.defaultProps = {
  text: '',
  alignSelf: '',
};

Author.propTypes = {
  text: PropTypes.string,
  alignSelf: PropTypes.string,
};

export default Author;
