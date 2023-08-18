import React, { Component, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalStyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

type Props = {
  children: React.ReactNode;
  onCloseModal: () => void;
  this: Modal;
};

class Modal extends Component<Props> {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModalHear);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModalHear);
  }

  onCloseModalHear = (evt: KeyboardEvent) => {
    if ((evt as KeyboardEvent).code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  onBackdropClick = (evt: MouseEvent) => {
    if (evt.target === evt.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    if (!modalRoot) {
      return;
    }

    return createPortal(
      <ModalOverlay onClick={this.onBackdropClick}>
        <ModalStyled>{this.props.children}</ModalStyled>
      </ModalOverlay>,
      modalRoot,
    );
  }
}

export default Modal;
