import React from "react";
import {
  Flex,
  FlexContainer,
  StyledButton,
  StyledCounter,
} from "./Counter.styled";

export const Counter = () => {
  const sayHi = (e) => {
    console.log(e);
    console.log("Hello");
  };
  const mouseMove = () => {
    console.log("You entered and move above a button");
  };
  return (
    <FlexContainer>
      <StyledCounter>
        <h1>{0}</h1>
        <Flex>
          <StyledButton>minus</StyledButton>
          <StyledButton onMouseMove={mouseMove}>reset</StyledButton>
          <StyledButton onClick={sayHi}>plus</StyledButton>
        </Flex>
      </StyledCounter>
    </FlexContainer>
  );
};
