import React from 'react';
import s from './Modal.module.css';

const Modal = ({ largeImageURL }) => {
  return (
    <div className={s.Overlay}>
      <div className={s.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
