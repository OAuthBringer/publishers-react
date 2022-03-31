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
  const host = encodeURIComponent("localhost:2222")
  const url = encodeURIComponent("http://localhost:2222/dashboard")

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
          <a href={`https://app.unlock-protocol.com/checkout?client_id=${host}&redirect_uri=${url}`}>
            <NavButton variant="outlined">
              login
            </NavButton>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};
