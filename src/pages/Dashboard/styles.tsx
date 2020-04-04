import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 5fr 1.5fr;
  grid-template-rows: 15vh 85vh;
  grid-template-areas:
    "header header header"
    "nav content aside";
`;
