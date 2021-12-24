import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';

class Searchbar extends Component {
  state = {
    value: '',
  };

  hadldeChange = evt => {
    const searchValue = evt.target.value;
    this.setState({ value: searchValue });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm__button}>
            <ImSearch />
            <span className={s.SearchForm__button__label}>Search</span>
          </button>

          <input
            className={s.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.hadldeChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

// const Searchbar = onSubmit => {
//   return (
//     <header className={s.Searchbar}>
//       <form className={s.SearchForm} onSubmit={() => onSubmit()}>
//         <button type="submit" className={s.SearchForm__button}>
//           <ImSearch />
//           <span className={s.SearchForm__button__label}>Search</span>
//         </button>

//         <input
//           className={s.SearchForm__input}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   );
// };

export default Searchbar;
