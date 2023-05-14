import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "@styles/globalStyles";
import "@styles/css/global.scss";
import { ThemeProvider } from "@emotion/react";
import { defaultColor } from "@styles/colors";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const colorTheme = {
  color: defaultColor,
};

root.render(
    <ThemeProvider theme={colorTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
