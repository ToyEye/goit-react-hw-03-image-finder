import React from 'react';
import s from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
const Searchbar = onSubmit => {
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm}>
        <button type="submit" className={s.SearchForm__button}>
          <ImSearch />
          <span className={s.SearchForm__button__label}>Search</span>
        </button>

        <input
          className={s.SearchForm__input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
