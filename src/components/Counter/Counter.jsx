import React from "react";
import {
  Flex,
  FlexContainer,
  StyledButton,
  StyledCounter,
} from "./Counter.styled";

export class Counter extends React.Component {
  increment = () => {
    console.log(122);
  };
  render() {
    return (
      <FlexContainer>
        <StyledCounter>
          <h1>{0}</h1>
          <Flex>
            <StyledButton>minus</StyledButton>
            <StyledButton>reset</StyledButton>
            <StyledButton onClick={this.increment}>plus</StyledButton>
          </Flex>
        </StyledCounter>
      </FlexContainer>
    );
  }
  // const sayHi = (e) => {
  //   console.log(e);
  //   console.log("Hello");
  // };
  // const mouseMove = () => {
  //   console.log("You entered and move above a button");
  // };

  // const grit = (name) => {
  //   console.log("Hello " + name + "! How are you?");
  // };
}
