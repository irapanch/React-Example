import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";
import SingleUser from "./pages/SingleUser";
import UserPosts from "./components/UserPosts/UserPosts";
import Posts from "./pages/PostsPage";
import PostsPage from "./pages/PostsPage";
// import { MyContext } from "./context/ContextProvider";
// import Login from "./components/Login/Login";
// import { Counter } from "./components/Counter/Counter.jsx";
// import Component1 from "./components/Component1.jsx";
// import { FlexContainer } from "./components/Counter/Counter.styled";
// import RegisterForm from "./components/RegisterForm/RegisterForm";
// import { StyledFlex } from "./styledComponents/StyledFlex";
// import { ThemeContext } from "./context/ThemeProviderContext";

// import LoginFormik from "./components/Login/LoginFormik";
// import LoginHookForm from "./components/Login/LoginHookForm";
// import { Employee } from "./components/Employees/Employee";
// import {Posts} from "./components/Posts/Posts";
// import { ColorPicker } from "./components/ColorPicker/ColorPicker";
// import { TodoList } from "./components/TodoList/TodoList";




const App = () => {
 
  return (
<>
{/* <nav>
<Link to="/">HOME</Link>  */}
{/* використання Link не перезавантажує сторінку, як звичайний тег <a href="/"></a> */}
  {/* <Link to="/about">ABOUT</Link>
</nav> */}
<Routes>
  <Route path="/" element={<Layout/>}>
    {/* "/"  це абсолютний шлях */}

  <Route  index element={<HomePage/>}/>
  {/* path='/' заміняємо на index, щоб уникнути конфліктів з однаковим шляхом */}

<Route path='about' element={<About/>}/>
{/* 'about' використовуємо без "/", тому що цей шлях відносний  <Route path="/" element={<Layout/>}> */}
<Route path="posts" element={<PostsPage/>}/>
<Route path="users" element={<Users/>}/>

{/* --нижче використовуємо динамічний параметр /:id*/}
<Route path="users/:id" element={<SingleUser/>}>
  {/* --нижче використовуємо вкладені маршрути users/:id/address*/}
<Route path="address" element={<h2>User address</h2>}/>
<Route path="posts" element={<UserPosts/>}/>

</Route>
<Route path="test" element={<Navigate to='/'/>}/>
{/*  <Navigate to='/'/> це одна з частин редиректу*/}
  </Route>
  <Route path="*" element={<PageNotFound/>}/>

</Routes>
</>
  
  )

};

export default App;
