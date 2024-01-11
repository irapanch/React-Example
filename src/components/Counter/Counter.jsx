import React from "react";
import {
  Flex,
  FlexContainer,
  StyledButton,
  StyledCounter,
} from "./Counter.styled";

export class Counter extends React.Component {
  static defaultProps = {
    title: "Default props for component",
  };
  state = {
    counter: 21,
    step: 2,
    loading: false,
  };
  increment = () => {
    // setState з колбеком, котрий йде після виконання зміни
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   console.log(this.state.counter);
    // });
    this.setState((prevState) => ({
      counter: prevState.counter + prevState.step,
    }));
  };
  decrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - prevState.step,
    }));
  };
  reset = () => {
    this.setState({ counter: 0, step: 1 });
  };
  handleChangeStep = (e) => {
    // this.setState({ step: Number(e.target.value) });
    this.setState({ step: +e.target.value });
  };
  render() {
    const { title } = this.props;
    const { counter, step } = this.state;

    return (
      <FlexContainer>
        <StyledCounter>
          <h4>{title}</h4>
          <h1>{counter}</h1>
          <input type="text" value={step} onChange={this.handleChangeStep} />
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
