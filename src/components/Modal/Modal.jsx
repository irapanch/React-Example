import React from "react";

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
