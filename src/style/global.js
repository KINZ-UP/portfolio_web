import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    @media (max-width: 1000px) {
      font-size: 80%;
    }
    @media (max-width: 568px){
        font-size: 60%; 
    };      
  };
`;

export default GlobalStyle;
