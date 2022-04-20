import { size } from './Devices';

const GenerateImageSizes = ({ cardWidth, leadWidth }) => {
  if (!cardWidth || !leadWidth) {
    return '';
  }
  return `(max-width: ${size.tablet}) ${cardWidth}px, ${leadWidth}px`;
};

export default GenerateImageSizes;
