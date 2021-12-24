import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL }) => (
  <li key={id} id={id} className={s.ImageGalleryItem}>
    <img className={s.ImageGalleryItem_image} src={webformatURL} alt="" />
  </li>
);

export default ImageGalleryItem;
