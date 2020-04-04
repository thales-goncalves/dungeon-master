import React from "react";
import Link from "./Link";
import { Container } from "./styles";


//FIXME: Overflow components
const Navigation = () => {
  return (
    <Container>
      <Link path="/c1" title="Component 1" />
      <Link path="/c2" title="Component 2" />


    </Container>
  );
};


export default Navigation;
