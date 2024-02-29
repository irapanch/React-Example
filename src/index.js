import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalSyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "modern-normalize";
import ContextProvider from "./context/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <ContextProvider>
    <App />
    </ContextProvider>
    <ToastContainer autoClose={1000} />
    <GlobalSyles />
  </ThemeProvider>
);
