import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import SignUpPage from "pages/SignUpPage";
import defaultTheme from "./theme";

import "./index.css";

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <SignUpPage />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
