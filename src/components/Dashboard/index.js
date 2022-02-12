import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Logo, { BatLogo } from "../Logo";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Card, { BasicCard } from "./Card";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  backgroundColor: "inherit",
  height: 80,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const AccountBalance = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="end"
      sx={{ paddingTop: "2rem" }}
    >
      <Typography variant="h6" color="secondary">
        BALANCE
      </Typography>
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <BatLogo />
        <Box display="flex" flexDirection="column" alignItems="end">
          <Box display="flex">
            <Typography variant="h2">11230000.00</Typography>
          </Box>
        </Box>
      </Box>
      <Typography variant="body2" color="primary">
        Next BAT Deposit Date: February 13th
      </Typography>
    </Box>
  );
};

export default function Elevation() {
  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6}>
          <AccountBalance />
          <Box
            sx={{
              p: 2,
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr" },
              gap: 3,
            }}
          >
            <BasicCard
              header="Statements"
              subtitle="No statements available"
              cta="View Statements"
            />
            <BasicCard
              header="Wallet Services"
              subtitle={null}
              body="Connect a crypto wallet to receive contributions and other payments"
              cta="Connect to Uphold"
              secondaryCta="Connect to Gemeni"
            />
            <Card
              header="Connect Content"
              subtitle="Get paid directly for your content"
              body="Link your content channels and earn"
              cta="Add a Channel"
            />

            <BasicCard
              header="Refer your Friends"
              subtitle="and Earn Tokens"
              body="Signups for the referral program are currently on hold"
              cta="Get started"
            />
          </Box>
          <BasicCard
            backgroundColor="secondary.main"
            header="Github"
            subtitle={null}
            cta="Verify Channel"
          />
          <Box sx={{padding: "0.25rem"}}/>
          <BasicCard
            backgroundColor="secondary.main"
            header="Twitter"
            subtitle={null}
            cta="Remove Channel"
          />

        </Grid>
      </Grid>
    </Box>
  );
}
