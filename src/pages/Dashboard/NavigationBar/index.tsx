import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const NavigationBar = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </Container>
  );
};
export default NavigationBar;
