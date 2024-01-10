import React from "react";
import PropTypes from "prop-types";

export const Modal = (props) => {
  return (
    <div>
      <h1>New Modal</h1>
      <hr></hr>
      {props.children}
      <hr></hr>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};
