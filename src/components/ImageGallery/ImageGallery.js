import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/';

const ImageGallery = ({ images }) => (
  <ul className={s.ImageGallery}>
    {images.map(({ id, webformatURL }) => (
      <ImageGalleryItem key={id} id={id} webformatURL={webformatURL} />
    ))}
  </ul>
);

export default ImageGallery;
