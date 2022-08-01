import { createTheme } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(37, 99, 235)',
    },
    secondary: {
      main: blueGrey[700],
    },
  },
});
