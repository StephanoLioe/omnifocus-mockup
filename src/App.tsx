import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Provider from "./context/projectProvider";

import "./App.css";

const App: React.FC = () => {
  return (
    <Provider>
      <Router>
        <div className="flex-col h-screen overflow-hidden">
          <TopBar />
          <div className="wrapper flex w-full h-full">
            <Navigation />
            <Main />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
