import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
// import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '24201171-f795c334c12b489d5c6645c6d';
const URI = `/?key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

// /?key=your_key&image_type=photo&orientation=horizontal&per_page=12&q=cat&page=1

class App extends Component {
  state = {
    images: [],
    page: 1,
    search: '',
  };

  async componentDidMount() {
    const response = await axios.get(`${URI}`);
    this.setState({ images: response.data.hits });
  }

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search === search) {
      const response = await axios.get(`${URI}&q=${search}&page=${page}`);
      this.setState({ images: response.data.hits });
    }
    const response = await axios.get(`${URI}&q=${search}&page=1`);
    this.setState({ images: response.data.hits, page: 1 });
  }

  onLoadMoreButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onSubmitHandler = ({ value }) => {
    this.setState({ search: value });
  };

  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmitHandler} />
        <ImageGallery images={images} />
        <Button name={'Load more'} onLoadMoreButton={this.onLoadMoreButton} />
        {/* <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} /> */}
      </div>
    );
  }
}

export default App;
