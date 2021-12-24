import React from 'react';
import s from './Button.module.css';

const Button = ({ name, onLoadMoreButton }) => (
  <button type="button" className={s.Button} onClick={() => onLoadMoreButton()}>
    {name}
  </button>
);

export default Button;
