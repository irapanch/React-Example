import React from "react";
// import { Counter } from "./components/Counter/Counter.jsx";
// import { FlexContainer } from "./components/Counter/Counter.styled";
// import RegisterForm from "./components/RegisterForm/RegisterForm";
import { StyledFlex } from "./styledComponents/StyledFlex";
import LoginFormik from "./components/Login/LoginFormik";
// import { Employee } from "./components/Employees/Employee";
// import Login from "./components/Login/Login";
// import { ColorPicker } from "./components/ColorPicker/ColorPicker";
// import { TodoList } from "./components/TodoList/TodoList";

const App = () => {
  return (
    <StyledFlex $center>
      <LoginFormik />
    </StyledFlex>
  );
};

export default App;
