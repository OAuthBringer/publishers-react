import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <Box display="inline">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{
          paddingTop: "3rem",
        }}
      >
        <Typography variant="h2">Lorum Ipsum</Typography>
        <TextField variant="filled" style={{ width: "30rem" }} />
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi metus,
          tincidunt sed tellus et, pulvinar dapibus nisl. Nulla magna enim,
          scelerisque vel fringilla ac, hendrerit sit amet ante. Quisque tempus
          rhoncus, ante neque efficitur ipsum, quis ornare tellus mi mattis
          purus. Nulla facilisi
        </Typography>
        <Button variant="contained">Lorem Ipsum</Button>
        <Link to="/login">Lorum Ipsum, Lorum Ipsum? </Link>
        <Box display="flex" flexDirection="row">
          <Link to="/login">Lorum IpsumLorum Ipsum? </Link>
          <Link to="/login">Ipsum? </Link>
        </Box>
      </Box>
    </Box>
  );
};
