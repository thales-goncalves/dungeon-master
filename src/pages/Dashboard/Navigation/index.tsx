import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const Navigation = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/c1">C1</Link>
        </li>
        <li>
          <Link to="/c2">C2</Link>
        </li>
      </ul>
    </Container>
  );
};
export default Navigation;
