import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => (
  <li className={s.ImageGalleryItem}>
    <img className={s.ImageGalleryItem_image} src="" alt="" />
  </li>
);

export default ImageGalleryItem;
