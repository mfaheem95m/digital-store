import { createTheme } from '@mui/material/styles';
import arr from "./fontsConfig";
import palette from "./palette";
import typography from "./typography";
import { Buttons } from "./buttons";

let theme = createTheme({
  typography: {
    fontFamily: ["Metropolis"].join(","),
    ...typography,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": arr,
      },
    },
    Buttons,
  },
  palette,
});

export default theme;
