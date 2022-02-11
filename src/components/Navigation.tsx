import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logo from "../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import batPill from "../img/built-with-bat-pill.svg";
import Button, { ButtonProps } from "@mui/material/Button";

const NavButton = (props: ButtonProps) => (
  <Button sx={{ fontWeight: 600 }} {...props} />
);

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "95%" }}>
      <Grid
        spacing={2}
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <Box style={{ paddingLeft: "2rem" }} display="inline">
            <a href="https://basicattentiontoken.org/">
              <img src={batPill} className="App-logo" alt="bat-pill" />
            </a>
          </Box>
        </Grid>
        <Grid item>
          <NavButton onClick={() => navigate("/signup")} variant="text">
            sign up
          </NavButton>
          <NavButton onClick={() => navigate("/login")} variant="outlined">
            login
          </NavButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navigation;
