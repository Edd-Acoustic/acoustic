import { BASE_API } from './Routes';

const GenerateImageSrcSet = ({
  cardWidth,
  leadWidth,
  leadSoucre,
  cardSoucre,
}) => {
  if (!cardWidth || !leadWidth || !leadSoucre || !cardSoucre) {
    return '';
  }

  return `${BASE_API}${cardSoucre} ${cardWidth}w, ${BASE_API}${leadSoucre} ${leadWidth}w`;
};

export default GenerateImageSrcSet;
