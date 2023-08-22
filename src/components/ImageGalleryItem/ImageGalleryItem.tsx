import { ImageGalleryItemStyled, GalleryImage } from './ImageGalleryItem.styled';

type TProps = {
  id: string;
  webformatURL: string;
  largeImageURL: string;
  onLargeImgClick: (arg: string) => void;
};

const ImageGalleryItem = ({ id, webformatURL, onLargeImgClick, largeImageURL }: TProps) => (
  <ImageGalleryItemStyled key={id} id={id}>
    <GalleryImage src={webformatURL} alt="" onClick={() => onLargeImgClick(largeImageURL)} />
  </ImageGalleryItemStyled>
);

export default ImageGalleryItem;
