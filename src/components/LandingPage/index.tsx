import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwoopContainer from "./SwoopContainer";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum mattis orci semper lacinia. Sed viverra, augue vitae pulvinar porta, est sem gravida turpis, fermentum pretium nunc libero sit amet mauris. Suspendisse facilisis commodo lacus, vehicula rhoncus quam pretium eu. Donec sed sem a magna eleifend fringilla. Praesent non massa at mi placerat fringilla. Nulla viverra, orci et mattis ultricies, felis eros hendrerit massa, ut vehicula erat nisi quis urna. Aliquam erat volutpat. Donec ut eros mattis, tempus tortor vitae, varius eros. Nullam commodo mattis velit a commodo.";

const LandingPage = () => {
  return (
    <Box sx={{ paddingTop: "3rem" }}>
      <SwoopContainer
        swoopTop={false}
        swoopBottom={false}
      >
        <Typography variant="h1">
          Earn more for content you publish to the web
        </Typography>
        <Typography variant="subtitle1">{content}</Typography>
      </SwoopContainer>
      <Box>
        <SwoopContainer>
          <Typography variant="h2" color="secondary">
            You create content and we get you paid.
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            {content}
          </Typography>
        </SwoopContainer>
      </Box>
      <SwoopContainer swoopTop={false} swoopBottom={false}>
        <Typography variant="h2">How does Brave Rewards work?</Typography>
        <Typography variant="subtitle1">{content}</Typography>
      </SwoopContainer>
      <Box>
        <SwoopContainer swoopBottom={false}>
          <Typography variant="h2" color="secondary">
            Join us!
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            {content}
          </Typography>
        </SwoopContainer>
      </Box>
    </Box>
  );
};

export default LandingPage
