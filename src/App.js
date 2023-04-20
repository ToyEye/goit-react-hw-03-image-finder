import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './index.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import LoaderSimbol from './components/Loader';
import Modal from './components/Modal';
import toast, { Toaster } from 'react-hot-toast';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '24201171-f795c334c12b489d5c6645c6d';
const URI = `/?key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

class App extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string,
    search: PropTypes.string,
  };

  state = {
    images: [],
    page: 1,
    search: '',
    showLoader: false,
    showModal: false,
    largeImageURL: '',
    total: 0,
  };

  async componentDidUpdate(_, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search) {
      this.setState({ showLoader: true });
      const response = await axios.get(`${URI}&q=${search}&page=${page}`);

      if (response.data.hits.length < 1) {
        toast.error('По вашему запросу ничего не найдно, введите другой запрос', {
          duration: 2000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            padding: '10px',
            textAlign: 'center',
          },
        });

        this.setState({ showLoader: false });

        return;
      }

      this.setState({
        showLoader: false,
        images: [...response.data.hits],
        total: response.data.total,
      });

      return;
    } else if (prevState.page !== page) {
      console.log(search);
      this.setState({ showLoader: true });
      const response = await axios.get(`${URI}&q=${search}&page=${page}`);

      this.setState(prevState => {
        return {
          showLoader: false,
          images: [...prevState.images, ...response.data.hits],
          total: response.data.total,
        };
      });

      return;
    }
  }

  onLoadMoreButton = async () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });

    this.handleScroll();
  };

  handleScroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 500);
  };
  onSubmitHandler = ({ value }) => {
    this.setState({ search: value });
  };

  onLargeImgClick = ({ largeImageURL }) => {
    this.setState({ largeImageURL: largeImageURL });
  };

  onToggleModal = img => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImageURL: img,
    }));
  };
  render() {
    const { images, showModal, largeImageURL, showLoader, total } = this.state;
    return (
      <div className="App">
        <Toaster />

        {showModal && (
          <Modal onCloseModal={this.onToggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
        <Searchbar onSubmit={this.onSubmitHandler} />
        {showLoader ? (
          <LoaderSimbol />
        ) : (
          <ImageGallery
            images={images}
            onOpenModal={this.onToggleModal}
            onLargeImgClick={this.onLargeImgClick}
          />
        )}
        {!showLoader && images.length !== total && (
          <Button name={'Load more'} onLoadMoreButton={this.onLoadMoreButton} />
        )}
      </div>
    );
  }
}

export default App;
