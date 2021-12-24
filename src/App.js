import React, { Component } from 'react';
import './index.css';
import Loader from 'react-loader-spinner';
// import { Container } from './components/Container';
import Searchbar from './components/Searchbar';

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
      </div>
    );
  }
}

export default App;
