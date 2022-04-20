/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useMemo } from 'react';
import RCImage from 'rc-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BASE_API, FALLBACK_IMAGE } from '../utils/Routes';
import device from '../utils/Devices';
import GenerateImageSrcSet from '../utils/GenerateImageSrcSet';
import GenerateImageSizes from '../utils/GenerateImageSizes';

const StyledImage = styled(RCImage).attrs((props) => ({
  src: props.src,
  srcSet: props.srcSet,
  sizes: props.sizes || `${device.mobileS} 640px, 1200px`,
  alt: props.alt || 'Interesting Acticle.',
  'data-testid': props['data-testid'],
}))`
  aspect-ratio: 1200/640;
  border-radius: 1rem 1rem 0rem 0rem;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  object-position: 90% 0;
  width: 100%;

  @media ${device.laptop} {
    border-radius: 0rem 1rem 1rem 0rem;
  }
`;

function Image({ isImageError, onError, ...rest }) {
  const {
    leadImageCaption,
    defaultSrc,
    cardWidth,
    leadWidth,
    cardSoucre,
    leadSoucre,
  } = useMemo(() => ({ ...rest }), [rest]);

  const src = `${BASE_API}${defaultSrc}`;

  const srcSet = useMemo(
    () =>
      GenerateImageSrcSet({
        cardWidth,
        cardSoucre,
        leadWidth,
        leadSoucre,
      }),
    [cardWidth, cardSoucre, leadWidth, leadSoucre],
  );

  const sizes = useMemo(
    () => GenerateImageSizes({ cardWidth, leadWidth }),
    [cardWidth, leadWidth],
  );

  return (
    <StyledImage
      src={isImageError ? FALLBACK_IMAGE : src}
      srcSet={isImageError ? FALLBACK_IMAGE : srcSet}
      alt={leadImageCaption}
      sizes={sizes}
      onError={onError}
      width="100%"
      data-testid="image-element"
    />
  );
}

Image.propTypes = {
  isImageError: PropTypes.bool.isRequired,
  onError: PropTypes.func.isRequired,
};
export default Image;
