import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});
ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
