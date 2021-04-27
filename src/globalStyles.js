import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

body {
    color: ${(props) => props.theme.colors.bg};
    font-family: 'Raleway', sans-serif;   
}

h1, h2, h3 {
    font-weight: 300;
}

`;

export default GlobalStyles;