import React, { Component } from 'react';

import PropTypes from 'prop-types';
import './index.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import LoaderSimbol from './components/Loader';
import Modal from './components/Modal';
import toast, { Toaster } from 'react-hot-toast';

import { getImages } from './service/service';

type Props = {
  images: string[];
  page: number;
  search: string;
  showLoader: boolean;
  showModal: boolean;
  largeImageURL: string;
};

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

  componentDidUpdate(prevProps: Props, prevState: Props) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.findImages();
    }
  }

  findImages = async () => {
    const { search, page } = this.state;

    this.setState({ showLoader: true });
    try {
      const data = await getImages(search, page);

      if (data.hits.length < 1) {
        toast.error('No results were found for your search, please enter another search', {
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

      this.setState((prevState: Props) => ({
        images: [...prevState.images, ...data.hits],
        showBtn: page < Math.ceil(data.totalHits / 12),
      }));
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.message, {
        duration: 2000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          padding: '10px',
          textAlign: 'center',
        },
      });
    } finally {
      this.setState({
        showLoader: false,
      });
    }

    return;
  };

  onLoadMoreButton = async () => {
    this.setState((prevState: Props) => {
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

  onSubmitHandler = (value: string) => {
    this.setState({ search: value, page: 1, images: [] });
  };

  onLargeImgClick = (largeImageURL: string) => {
    this.setState({ largeImageURL: largeImageURL });
    this.onToggleModal();
  };

  onToggleModal = () => {
    this.setState((prevState: Props) => ({
      showModal: !prevState.showModal,
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
        {showLoader && <LoaderSimbol />}
        <ImageGallery images={images} onLargeImgClick={this.onLargeImgClick} />,
        {!showLoader && images.length !== total && (
          <Button name="Load more" onLoadMoreButton={this.onLoadMoreButton} />
        )}
      </div>
    );
  }
}

export default App;
