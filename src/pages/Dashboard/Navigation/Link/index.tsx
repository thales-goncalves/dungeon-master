import React from "react";

import { Container, Title } from "./styles";

type LinkProps = {
  path: string;
  title: string;
};

const Link = ({ path, title }: LinkProps) => {
  return (
    <Container to={path}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Link;
