import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Osvald';
        src: url('../fonts/Oswald-VariableFont_wght.ttf') format('truetype');
        /* font-weight: normal; */
        font-style: normal; 
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Arial', sans-serif;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default GlobalStyles;
