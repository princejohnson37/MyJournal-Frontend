import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif', // Set Poppins as the default font
  },

  palette: {
    primary: {
      main: "#DA614C",
    },
    secondary: {
      main: "#F3E9DC",
    },
    background: {
      default: "#FEFDF9",
    },

    blue: {
      main: "#101828",
    },
    grey: {
      main: "#667085",
      light: "#D0D5DD",
      lighter: "#FFFFFF",
    },
  },
});

export default theme;
