import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import theme from "./theme.js";
import { ThemeProvider } from "@mui/material/styles";
import CommonError from "./pages/ErrorPages/CommonError.jsx";
import { CssBaseline } from "@mui/material";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
    <App/>
    </ThemeProvider>
  </React.StrictMode>
);
