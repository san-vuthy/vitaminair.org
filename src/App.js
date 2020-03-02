import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Reforestation from "./components/contents/Reforestation";
import Natural from "./components/contents/Natural";
import Ecotourism from "./components/contents/Ecotourism";
import Seeds from "./components/contents/Seeds";
import Air from "./components/contents/Air";
import About from "./components/contents/About";
import "./App.css";
// import "./App.css";
import SinglePage from "./components/page/singlePage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/single-page" component={SinglePage} />
          <Route exact path="/reforestation" component={Reforestation} />
          <Route exact path="/naturalfarming" component={Natural} />
          <Route exact path="/ecotourism" component={Ecotourism} />
          <Route exact path="/seedsbomb" component={Seeds} />
          <Route exact path="/airwater" component={Air} />
          <Route exact path="/about" component={About} />
          <Redirect to="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
