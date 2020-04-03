import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
    html,
    body {
        width: 100vw;
        height: 100vh;
        background-color: #282c34;
        color: white;
      
    }
    #root {
        width: 100vw;
        height: 100vh;     
    }

    * {
        box-sizing: border-box;
    }

`;

export default GlobalStyles;
