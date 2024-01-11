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
    // setState з колбеком, котрий йде після виконання зміни
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   console.log(this.state.counter);
    // });
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  reset = () => {
    this.setState({ counter: 0 });
  };
  render() {
    const { title } = this.props;
    const { counter } = this.state;
    return (
      <FlexContainer>
        <StyledCounter>
          <h4>{title}</h4>
          <h1>{counter}</h1>
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
