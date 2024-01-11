import React from "react";
import { Counter } from "./components/Counter/Counter.jsx";
import { FlexContainer } from "./components/Counter/Counter.styled";
// import { ColorPicker } from "./components/ColorPicker/ColorPicker";
// import { TodoList } from "./components/TodoList/TodoList";

const App = () => {
  return (
    <>
      <FlexContainer>
        <Counter />
      </FlexContainer>
    </>
  );
};

export default App;
