import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      light: teal[300],
      main: teal[700],
      dark: teal[900],
    },
  },
});

export default theme;
