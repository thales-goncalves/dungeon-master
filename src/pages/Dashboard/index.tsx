import React from "react";

import Header from "./Header";
import Main from "./Main";
import Navigation from "./Navigation";
import Aside from "./Aside";

import { Container, Content, Wrapper } from "./styles";

const Dashboard = () => {
  return (
    <Container>
      <Content>
        <Wrapper>
          <Header />
          <Navigation />
          <Main />
          <Aside />
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Dashboard;
