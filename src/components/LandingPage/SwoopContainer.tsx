import React from "react";
import Box from "@mui/material/Box";
import {
  withStyles,
  Theme,
  makeStyles,
  createStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: "2rem",
      paddingBottom: "4rem",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
    },
    content: {
      paddingTop: "2rem",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
    },
    inner: { maxWidth: "1200px" },
  })
);

const SwoopBottom = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1430 140"
    fill="#FFF"
    className={"bottom-swoop"}
  >
    <path d="M0 140h1440V46.75C1360.635 15.583 1268.302 0 1163 0 812.13 0 674 113.78 370.736 127.279 188.866 135.374 65.286 119.625 0 80.03V140z" />
  </svg>
);

const SwoopTop = () => (
  <svg
    viewBox="0 0 1430 140"
    className="top-swoop"
    fill="#FFF"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1440 0v59.969c-65.287-39.594-188.865-55.343-370.736-47.248C766 26.221 627.87 140 277 140 171.698 140 79.365 124.417 0 93.25V0h1440z" />
  </svg>
);

interface SwoopProps {
  swoopTop?: boolean;
  swoopBottom?: boolean;
  children?: React.ReactElement[] | string;
}

const SwoopContainer = ({
  swoopTop = true,
  swoopBottom = true,
  children,
}: SwoopProps) => {
  const classes = useStyles();
  const isSwoop = swoopTop || swoopBottom
  const contentSxProps = isSwoop ? {background: "white", paddingBottom: "10rem"} : {}
  const innerSxProps = isSwoop ? {display: "flex", flexDirection: "column", alignItems: "center"} : {}

  return (
    <div className={classes.root}>
      {swoopTop && <SwoopBottom />}
      <Box className={classes.content} sx={contentSxProps}>
        <Box className={classes.inner} sx={innerSxProps}>{children}</Box>
      </Box>
      {swoopBottom && <SwoopTop />}
    </div>
  );
};

export default SwoopContainer;
