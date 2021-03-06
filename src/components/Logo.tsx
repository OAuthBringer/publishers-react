import React from "react";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import batPill from "../img/built-with-bat-pill.svg";
import batLogo from "../img/bat-logo@2x.png";

export const BatPill = () => (
  <Box style={{ paddingLeft: "2rem" }} display="inline">
    <a href="https://basicattentiontoken.org/">
      <img src={batPill} className="App-logo" alt="bat-pill" />
    </a>
  </Box>
);

export const BatLogo = () => (
  <img src={batLogo} style={{height: "3rem"}}  alt="bat-logo" />
);

const Logo = () => (
  <Link to="/">
    <img src={logo} className="App-logo" alt="logo" />
  </Link>
);

export default Logo;
