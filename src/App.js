import React from "react";
import "./styles/index.scss";
import Home from "./pages/home";
import { Route, Redirect } from "react-router-dom";

function App() {
  if (!localStorage.getItem("jwt")) {
    return <Redirect to="/login" />;
  }

  return (
    <div id="app">
      <Home />
    </div>
  );
}

export default App;
