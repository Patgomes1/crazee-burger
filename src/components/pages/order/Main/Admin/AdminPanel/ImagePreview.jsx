import styled from 'styled-components';
import { theme } from '../../../../../../theme';

export default function ImagePreview({ imageSource, title }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? (
        <img className="image" src={imageSource} alt={title} />
      ) : (
        <div className="no-image">Aucune image</div>
      )}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  display: flex;
  justify-content: center;
  align-items: center;

  .no-image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.regular};
  }
  .image {
    width: 100px;
    height: 100px;
    object-fit: contain;
    object-position: center;
  }
`;
