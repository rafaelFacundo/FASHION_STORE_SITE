import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Oswald';
        src: url('../fonts/Oswald-VariableFont_wght.ttf') format('truetype');
        font-style: normal; 
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('../fonts/Montserrat-VariableFont_wght.ttf.ttf') format('truetype');
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
