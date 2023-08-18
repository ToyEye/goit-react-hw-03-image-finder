import { ImageGalleryItemStyled, GalleryImage } from './ImageGalleryItem.styled';

type TProps = {
  id: string;
  webformatURL: string;
  largeImageURL: string;
  onOpenModal: (arg: string) => void;
};

const ImageGalleryItem = ({ id, webformatURL, onOpenModal, largeImageURL }: TProps) => (
  <ImageGalleryItemStyled key={id} id={id}>
    <GalleryImage src={webformatURL} alt="" onClick={() => onOpenModal(largeImageURL)} />
  </ImageGalleryItemStyled>
);

export default ImageGalleryItem;
