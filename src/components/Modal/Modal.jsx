import React from "react";
import PropTypes from "prop-types";
import { CloseButton, ModalContent, ModalWrapper } from "./Modal.styled";

export const Modal = ({ children, close }) => {
  //++++++ 9 приймаємо пропс на закриття модалки
  return (
    <ModalWrapper>
      <ModalContent>
        <>
          <h1>Modal</h1>
          <hr />
        </>
        <CloseButton onClick={close}>×</CloseButton>
        {/* +++++++ 10 застосовуємо пропс для закриття модалки */}
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};
