import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register/Register";
import Home from "./layouts/Home/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    // BEM
    <Router>
      <Switch>
        <Route exact path='/' component={Login}>
        </Route>
        <Route exact path='/registrarse' component={Register}>
        </Route>
        <Route exact path='/main' component={Home}>
        </Route>
    </Switch>
  </Router>
        );
}

export default App;

