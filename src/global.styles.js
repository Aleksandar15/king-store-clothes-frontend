import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle `
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 55px;
    background-color:#F0FFFF;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }


  a {
  color: black;
  text-decoration: gold underline;
  }

  * {
  box-sizing: border-box;
  }
`