import { createTheme } from "@mui/material/styles";
import { blueGrey, amber, red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[400],
    },
    secondary: {
      main: amber[400],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
