import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import Logo, { BatPill} from '../Logo'
import Button, { ButtonProps } from "@mui/material/Button";
import { useAppContext } from "../../AppContext";

const NavButton = (props: ButtonProps) => (
  <Button sx={{ fontWeight: 600 }} {...props} />
)

export const Header = () => {
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
          <Logo/>
          <BatPill/>
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
