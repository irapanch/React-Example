import React from "react";
import styled from "styled-components";

export const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 10px 12px;
  width: 200px;
  margin: auto;
  margin-top: 20px;
`;
