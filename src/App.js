import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
// import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
