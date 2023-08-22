import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

type TImages = {
  id: string;
  webformatURL: string;
  largeImageURL: string;
};

type Props = {
  images: TImages[];
  onLargeImgClick: (args: string) => void;
};

const ImageGallery = ({ images, onLargeImgClick }: Props) => (
  <GalleryList>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        webformatURL={webformatURL}
        onLargeImgClick={onLargeImgClick}
        largeImageURL={largeImageURL}
      />
    ))}
  </GalleryList>
);

export default ImageGallery;
