import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';

import Button from '../../elements/Button';

const StyledMarkdownParagraph = styled(Markdown)`
  font-size: var(--size20px);
  line-height: var(--size24px);
  padding: 0.7rem 0rem;
  white-space: normal;
`;

function ReadMore({ text }) {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = useCallback(() => {
    setIsReadMore(!isReadMore);
  }, [isReadMore]);

  const slicedText = `${text.slice(0, 230)}...`;

  return (
    <>
      <StyledMarkdownParagraph>
        {isReadMore ? slicedText : text}
      </StyledMarkdownParagraph>
      <Button type="button" onClick={toggleReadMore}>
        {isReadMore ? 'Read More' : ' Show Less'}
      </Button>
    </>
  );
}

ReadMore.defaultProps = {
  text: '',
};

ReadMore.propTypes = {
  text: PropTypes.string,
};

export default ReadMore;
