import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
// import "./App.css";
import Ecotourism from "./components/page/ecotourism";
import Airwater from "./components/page/airwater";
import NaturalFarming from "./components/page/natural-farming";
import Reforestation from "./components/page/reforestration";
import SeedBomb from "./components/page/seed-bomb";

// function App() {
//   return (
//     <div className="App">
//       {/* <Ecotourism /> */}
//       <Airwater />
//       {/* <NaturalFarming /> */}
//       {/* <Reforestation /> */}
//       {/* <SeedBomb /> */}
//     </div>

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          {/* <SinglePage /> */}
          <Ecotourism />
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/reforestation" component={Reforestation}/>
          <Route exact path="/natural-farming" component={Natural}/>
          <Route exact path="/ecotourism" component={Ecotourism}/>
          <Route exact path="/seedsbomb" component={Seeds}/>
          <Route exact path="/airwater" component={Air}/>
          <Route exact path="/about" component={About}/> */}
          <Redirect to="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
