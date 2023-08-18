import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

type Props = {
  images: [];
  onOpenModal: () => void;
};

const ImageGallery = ({ images, onOpenModal }: Props) => (
  <GalleryList>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        webformatURL={webformatURL}
        onOpenModal={onOpenModal}
        largeImageURL={largeImageURL}
      />
    ))}
  </GalleryList>
);

export default ImageGallery;
