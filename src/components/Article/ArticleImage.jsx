/* eslint-disable react/jsx-props-no-spreading */
import { useCallback, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Image from '../../elements/Image';
import { articleStateMock } from '../../utils/TestUtils';

function ArticleImage({ mainImage }) {
  const [isImageError, setIsImageError] = useState(false);

  const rest = useMemo(() => {
    const mainImageValue = mainImage?.value;
    const renditions = mainImageValue?.leadImage?.renditions;

    return {
      leadImageCaption: mainImageValue?.leadImageCaption?.value,
      defaultSrc: renditions?.default?.source,
      cardWidth: renditions?.card?.width,
      leadWidth: renditions?.lead?.width,
      cardSoucre: renditions?.card?.source,
      leadSoucre: renditions?.lead?.source,
    };
  }, [mainImage]);

  const handleImageError = useCallback(() => {
    setIsImageError(true);
  }, []);

  return (
    <Image
      onError={handleImageError}
      mainImage={mainImage}
      isImageError={isImageError}
      {...rest}
    />
  );
}

ArticleImage.defaultProps = {
  mainImage: articleStateMock.elements.mainImage,
};

ArticleImage.propTypes = {
  mainImage: PropTypes.shape({
    value: PropTypes.shape({
      leadImageCaption: PropTypes.shape({
        value: PropTypes.string,
      }),
      leadImage: PropTypes.shape({
        renditions: PropTypes.shape({
          card: PropTypes.shape({
            height: PropTypes.number,
            width: PropTypes.number,
            source: PropTypes.string,
            url: PropTypes.string,
          }),
          default: PropTypes.shape({
            height: PropTypes.number,
            source: PropTypes.string,
            url: PropTypes.string,
            width: PropTypes.number,
          }),
          lead: PropTypes.shape({
            height: PropTypes.number,
            width: PropTypes.number,
            url: PropTypes.string,
            source: PropTypes.string,
          }),
        }),
      }),
    }),
  }),
};

export default ArticleImage;
