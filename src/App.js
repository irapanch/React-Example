import React, { useContext } from "react";
import {Posts} from "./components/Posts/Posts";
import { MyContext } from "./context/ContextProvider";
// import { Counter } from "./components/Counter/Counter.jsx";
// import Component1 from "./components/Component1.jsx";
// import { FlexContainer } from "./components/Counter/Counter.styled";
// import RegisterForm from "./components/RegisterForm/RegisterForm";
// import { StyledFlex } from "./styledComponents/StyledFlex";

// import LoginFormik from "./components/Login/LoginFormik";
// import LoginHookForm from "./components/Login/LoginHookForm";
// import { Employee } from "./components/Employees/Employee";
// import Login from "./components/Login/Login";
// import { ColorPicker } from "./components/ColorPicker/ColorPicker";
// import { TodoList } from "./components/TodoList/TodoList";




const App = () => {
  const {user} =  useContext(MyContext)

  return (
  <>
  <h1>{user.name}</h1>
  <h2>{user.email}</h2>
  < Posts />;
  </>
  )
  // return <StyledFlex $center>
  //   <Login/>
  // </StyledFlex>;

  // return (
  // 
  // < Counter  />
  // <Component1 />
  // 
  // )

};

export default App;
