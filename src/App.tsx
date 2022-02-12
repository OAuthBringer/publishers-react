import React from "react";
import "./App.css";
import Theme from "./Theme";
import AppContext from "./AppContext";
import AppBar from "./components/AppBar";
import { Header as LandingHeader } from "./components/LandingPage";
import Routes from "./Routes";
import { useLocation } from "react-router-dom";
import { SwoopTop, SwoopBottom } from "./components/LandingPage";
import Box from "@mui/material/Box";

function App() {
  const location = useLocation();
  const isRoot = location.pathname == "/";
  const isDashboard = location.pathname == "/dashboard";
  const isLanding = !isDashboard;
  const appContext = { isDashboard, isLanding };

  return (
    <AppContext.Provider value={appContext}>
      <Theme>
        <div className="App">
          <header className="App-header">
            {isLanding && <LandingHeader />}
            {isDashboard && <AppBar />}
          </header>
          <Routes />
          {!isRoot && (
            <Box className="fade">
              <SwoopBottom />
            </Box>
          )}
        </div>
      </Theme>
    </AppContext.Provider>
  );
}

export default App;
