import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { GlobalSyles } from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <GlobalSyles />
  </>
);
