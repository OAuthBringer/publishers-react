import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { h1, h2, h3, h4, h5, h6, a } from 'brave-ui/shared/typography'

const primary = "#FFFFFF";
const secondary = "#2C3333";

export const theme = createTheme({
  typography: {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
  },
  overrides: {
    MuiInputBase: {
      root: {
        "&$disabled": {
          backgroundColor: "hite",
        },
      },
    },
  },
  palette: {
    primary: { main: primary },
    secondary: { main: secondary },
  },
});

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
