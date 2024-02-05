import React, { Component } from "react";

import { CloseButton, ModalContent, ModalWrapper } from "./Modal.styled";

class Modal extends Component {
  handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
      this.props.close();
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  onBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.close();
    }
  };
  render() {
    return (
      <ModalWrapper onClick={this.onBackDropClick}>
        <ModalContent>
          <>
            <h1>Modal</h1>
            <hr />
          </>
          <CloseButton onClick={this.props.close}>×</CloseButton>
          {/* +++++++ 10 застосовуємо пропс для закриття модалки */}
          {this.props.children}
        </ModalContent>
      </ModalWrapper>
    );
  }
}

export default Modal;
