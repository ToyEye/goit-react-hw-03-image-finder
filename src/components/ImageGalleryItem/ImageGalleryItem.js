import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, onOpenModal }) => (
  <li key={id} id={id} className={s.ImageGalleryItem}>
    <img className={s.ImageGalleryItem_image} src={webformatURL} alt="" onClick={onOpenModal} />
  </li>
);

export default ImageGalleryItem;
