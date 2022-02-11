import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Theme from "./Theme";
import AppContext from "./AppContext";
import Navigation from "./components/Navigation";
import Routes from './Routes'

function App() {
  const appContext = {};

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
