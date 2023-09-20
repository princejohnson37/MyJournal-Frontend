import { createTheme } from "@mui/material/styles";

// custom theme
const theme = createTheme({
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
