
import React from 'react';
import {Switch,Route, Redirect,BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import './App.css';
// import "./App.css";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/> 
          {/* <Route exact path="/reforestation" component={Reforestation}/>
          <Route exact path="/natural-farming" component={Natural}/>
          <Route exact path="/ecotourism" component={Ecotourism}/>
          <Route exact path="/seedsbomb" component={Seeds}/>
          <Route exact path="/airwater" component={Air}/>
          <Route exact path="/about" component={About}/> */}
          <Redirect  to="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
