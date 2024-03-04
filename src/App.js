import React, { useContext } from "react";
// import {Posts} from "./components/Posts/Posts";
// import { MyContext } from "./context/ContextProvider";
// import Login from "./components/Login/Login";
// import { Counter } from "./components/Counter/Counter.jsx";
// import Component1 from "./components/Component1.jsx";
// import { FlexContainer } from "./components/Counter/Counter.styled";
// import RegisterForm from "./components/RegisterForm/RegisterForm";
// import { StyledFlex } from "./styledComponents/StyledFlex";
import { ThemeContext } from "./context/ThemeProviderContext";

// import LoginFormik from "./components/Login/LoginFormik";
// import LoginHookForm from "./components/Login/LoginHookForm";
// import { Employee } from "./components/Employees/Employee";

// import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import { TodoList } from "./components/TodoList/TodoList";




const App = () => {
  // const {user, isLoggedIn, logout} =  useContext(MyContext)
  // if (!isLoggedIn){
  //  return <StyledFlex $center>
  //   <Login/>
  // </StyledFlex>;
  // }

  const {theme, changeTheme} = useContext(ThemeContext)

  // return (
  // <div style={{background: theme === 'dark' ? 'lightgray' : 'white'}}>
  // <h1>{user.name}</h1>
  // <h2>{user.email}</h2>
  // <button onClick={changeTheme}>SWITCH THEME</button>
  // <button onClick={logout}>LOGOUT</button>
  // < Posts />;
  // </div>
  // )
  // return <StyledFlex $center>
  //   <Login/>
  // </StyledFlex>;

  return (

    <div style={{background: theme === 'dark' ? 'lightgray' : 'white'}}>
      <button onClick={changeTheme}>SWITCH THEME</button>
  <TodoList/>
  </div>

    
  
  )

};

export default App;
