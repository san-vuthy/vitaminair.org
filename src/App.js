import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Ecotourism from "./components/page/ecotourism";
// import Home from "./components/Home";
// import Airwater from "./components/page/airwater";
// import NaturalFarming from "./components/page/natural-farming";
// import Reforestation from "./components/page/reforestration";
// import SeedBomb from "./components/page/seed-bomb";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Ecotourism />

          {/* <Route exact path="/" component={Home} />
          <Route exact path="/reforestation" component={Reforestation} />
          <Route exact path="/natural-farming" component={NaturalFarming} />
          <Route exact path="/ecotourism" component={Ecotourism} />
          <Route exact path="/seedsbomb" component={SeedBomb} />
          <Route exact path="/airwater" component={Airwater} />
          <Route exact path="/about" component={About} />
          <Redirect to="/" component={Home} /> */}
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
