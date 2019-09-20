import React from "react";
import "./App.css"
import { Content } from "Components/Body/Content/Content";
import { Header } from "Components/Body/Header/Header";

function App() {
  return (
    <div className="AppContainer">
      <div className="Surround" />
      <div className="App">
        <Header />
        <Content />
      </div>
      <div className="Surround" />
    </div>
  );
}

export default App;
