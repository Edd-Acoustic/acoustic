import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';

import device from '../utils/Devices';

const StyledMarkdownHeading = styled(Markdown).attrs((props) => ({
  'data-testid': props['data-testid'],
}))`
  padding: var(--size16px) 0rem;

  @media ${device.laptop} {
    font-size: 3rem;
    padding: var(--size14px) 0rem;
  }
`;

function Title({ text }) {
  return (
    <StyledMarkdownHeading data-testid="title-element">
      {text}
    </StyledMarkdownHeading>
  );
}

Title.defaultProps = {
  text: '',
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
