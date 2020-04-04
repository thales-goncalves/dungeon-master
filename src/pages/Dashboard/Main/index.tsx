import React from "react";
import C1 from "../../../components/C1";
import C2 from "../../../components/C2";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "./styles";

const Main = () => {
  return (
    <Container>
      <Switch>
        <Route path="/c1">
          <C1 />
        </Route>
        <Route path="/c2">
          <C2 />
        </Route>
        <Redirect to="/c1" />
      </Switch>
    </Container>
  );
};

export default Main;
