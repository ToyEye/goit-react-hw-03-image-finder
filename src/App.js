import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import LoaderSimbol from './components/Loader';
import Modal from './components/Modal';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '24201171-f795c334c12b489d5c6645c6d';
const URI = `/?key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

class App extends Component {
  state = {
    images: [],
    page: 1,
    search: '',
    showModal: false,
    largeImageURL: '',
  };

  async componentDidMount() {
    const response = await axios.get(`${URI}`);
    this.setState({ images: response.data.hits });
  }

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search) {
      const response = await axios.get(`${URI}&q=${search}&page=1&page=1`);
      this.setState({ images: response.data.hits, page: 1 });
      return;
    }
    if (prevState.page !== page) {
      const response = await axios.get(`${URI}&q=${search}&page=${page}`);
      const newArray = response.data.hits;
      this.setState(({ images }) => ({ images: [...images, ...newArray] }));
    }
  }

  onLoadMoreButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onSubmitHandler = ({ value }) => {
    this.setState({ search: value });
  };

  onLargeImgClick = ({ largeImageURL }) => {
    this.setState({ largeImageURL: largeImageURL });
  };

  onToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { images, showModal } = this.state;
    return (
      <div className="App">
        {showModal && (
          <Modal images={images} onCloseModal={this.onToggleModal}>
            <img src={this.props.children} alt="" />
          </Modal>
        )}
        <Searchbar onSubmit={this.onSubmitHandler} />
        <LoaderSimbol />
        <ImageGallery
          images={images}
          onOpenModal={this.onToggleModal}
          onLargeImgClick={this.onLargeImgClick}
        />
        {images.length > 1 && (
          <Button name={'Load more'} onLoadMoreButton={this.onLoadMoreButton} />
        )}
      </div>
    );
  }
}

export default App;
