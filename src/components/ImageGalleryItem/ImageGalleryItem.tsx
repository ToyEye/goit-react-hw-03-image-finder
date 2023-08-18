import React from 'react';
import s from './ImageGalleryItem.module.css';

type TProps = {
  id: string;
  webformatURL: string;
  largeImageURL: string;
  onOpenModal: (arg: string) => void;
};

const ImageGalleryItem = ({ id, webformatURL, onOpenModal, largeImageURL }: TProps) => (
  <li key={id} id={id} className={s.ImageGalleryItem}>
    <img
      className={s.ImageGalleryItem_image}
      src={webformatURL}
      alt=""
      onClick={() => onOpenModal(largeImageURL)}
    />
  </li>
);

export default ImageGalleryItem;
