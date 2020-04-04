import React, { Component } from "react";
import { Router } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Dashboard from "./pages/Dashboard";
import history from "./history";

const App = () => {
  return (
    <Router history={history}>
      <GlobalStyles />
      <Dashboard />
    </Router>
  );
};
export default App;
