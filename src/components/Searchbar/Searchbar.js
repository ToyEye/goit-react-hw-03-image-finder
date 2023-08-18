import React, { Component } from 'react';

import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { ImSearch } from 'react-icons/im';

import { HeaderStyled, SearchForm, FormButton, FormInput, ButtonLabel } from './Searchbar.styled';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    value: '',
  };

  hadldeChange = evt => {
    const searchValue = evt.target.value;
    this.setState({ value: searchValue });
  };

  handleSubmit = evt => {
    const { value } = this.state;
    evt.preventDefault();
    if (value === '') {
      toast.error('Request must be entered', {
        duration: 2000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          padding: '10px',
          textAlign: 'center',
        },
      });
      return;
    }
    this.props.onSubmit(this.state);
    this.setState({ value: '' });
  };

  render() {
    return (
      <HeaderStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <FormButton type="submit">
            <ImSearch />
            <ButtonLabel>Search</ButtonLabel>
          </FormButton>

          <FormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.hadldeChange}
            value={this.state.value}
          />
        </SearchForm>
      </HeaderStyled>
    );
  }
}

export default Searchbar;
