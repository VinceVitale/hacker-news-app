import React from "react";
import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import HackerNewsSearch from "./containers/HackerNewsSearch";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Home</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={HackerNewsSearch} />
        <Route />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
