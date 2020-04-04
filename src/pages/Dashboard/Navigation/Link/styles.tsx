import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  margin: 0 10px;
  padding: 0 15px;
  height: 56px;

  display: flex;

  border: 1px solid white;
  align-items: center;
  color: white;

  &.active {
    background-color: red;
  }

  &:hover {
    background-color: blue;
  }
`;

export const Title = styled.div`
  display: flex;
  padding: 20px 16px;
  font-size: 16px;
  line-height: 19px;
`;
