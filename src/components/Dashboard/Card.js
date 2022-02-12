import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Logo, { BatLogo } from "../Logo";

export function BasicCard({
  header = "Header",
  subtitle = "subtitle",
  body = null,
  cta = null,
  secondaryCta = null,
  backgroundColor = "inherit",
}) {
  return (
    <Card
      variant="outlined"
      sx={{ minWidth: 275, backgroundColor, borderWidth: "0.15rem" }}
    >
      <CardContent>
        <Typography color="primary" variant="h5" component="div">
          {header}
        </Typography>
        {subtitle && (
          <Typography sx={{ mb: 1.5 }} color="primary">
            {subtitle}
          </Typography>
        )}
        {body && (
          <Typography variant="body2" color="primary">
            {body}
          </Typography>
        )}
      </CardContent>
      {cta && (
        <CardActions>
          <Button size="small">{cta}</Button>
        {secondaryCta && <Button size="small">{secondaryCta}</Button>}
        </CardActions>
      )}
    </Card>
  );
}

export default function ActionAreaCard() {
  return (
    <Card
      variant="outlined"
      sx={{ borderWidth: "0.15rem", maxWidth: 345, backgroundColor: "inherit" }}
    >
      <CardActionArea sx={{minHeight: "100%"}}>
        <CardContent>
          <Box display="flex" justifyContent="center" alignItems="center">
            <BatLogo />
            <Box display="flex" flexDirection="column" alignItems="end">
              <Box display="flex">
                <Typography variant="h4">Add New Channel</Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
