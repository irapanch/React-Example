import React from "react";
import {
  Flex,
  FlexContainer,
  StyledButton,
  StyledCounter,
} from "./Counter.styled";

export class Counter extends React.Component {
  state = {
    counter: 21,
    step: 1,
    loading: false,
  };
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  reset = () => {
    this.setState({ counter: 0 });
  };
  render() {
    return (
      <FlexContainer>
        <StyledCounter>
          <h4>{this.props.title}</h4>
          <h1>{this.state.counter}</h1>
          <Flex>
            <StyledButton onClick={this.decrement}> minus</StyledButton>
            <StyledButton onClick={this.reset}>reset</StyledButton>
            <StyledButton onClick={this.increment}>plus</StyledButton>
          </Flex>
        </StyledCounter>
      </FlexContainer>
    );
  }
}
