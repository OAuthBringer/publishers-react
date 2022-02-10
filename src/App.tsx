import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Theme from "./Theme";
import Box from "@mui/material/Box";
import AppContext from "./AppContext";
import Navigation from "./components/Navigation";
import Routes from './Routes'

function App() {
  const appContext = {};
  const sections = [];

  return (
    <AppContext.Provider value={appContext}>
      <Theme>
        <Router>
          <div className="App">
            <header className="App-header">
              <Navigation />
            </header>
            <Routes />
          </div>
        </Router>
      </Theme>
    </AppContext.Provider>
  );
}

export default App;
