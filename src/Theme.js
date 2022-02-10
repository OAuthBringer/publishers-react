import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const primary = "#FFFFFF";
const secondary = "#2C3333";

export const theme = createTheme({
  typography: {
    h1: { fontSize: "50px", fontWeight: 600 },
    h2: { fontSize: "34px", fontWeight: 600 },
    h4: { fontWeight: 400 },
    button: { textTransform: "none" },
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
