import React from "react";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <div className="flex-col h-screen overflow-hidden">
      <TopBar />
      <div className="wrapper flex w-full h-full">
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;
