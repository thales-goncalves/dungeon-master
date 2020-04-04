import React, { Component } from "react";
import {Switch, Route, Router } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import history from "./history";



const App = () => {
  return (
    <Router history={history}>
      <GlobalStyles />
      <Dashboard />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </Router>
  );
};
export default App;
