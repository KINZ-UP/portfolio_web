import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "SsangmunDong";
    src: url("./font/Typo_SsangmunDongB.ttf");
  }

  html {
    @media (max-width: 1000px) {
      font-size: 80%;
    }
    @media (max-width: 568px){
        font-size: 70%; 
    };      
  };
`;

export default GlobalStyle;
