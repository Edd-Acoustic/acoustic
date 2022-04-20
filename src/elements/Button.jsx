/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledReadMoreButton = styled.button`
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : 'flex-start')};
  border: solid #626166 0.1rem;
  background: none;
  border-radius: 0.2rem;
  color: #626166;
  cursor: pointer;
  display: inline;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  width: fit-content;
`;

function Button({ children, onClick, type, ...props }) {
  return (
    <StyledReadMoreButton type={type} onClick={onClick} {...props}>
      {children}
    </StyledReadMoreButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
