import { 
  createGlobalStyle, 
  css,
  FlattenSimpleInterpolation
 } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

interface GlobalStyleProps {
  lock: boolean;
  theme: 'light' | 'dark';
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
   *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height:100%;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
    transition: background-color 300ms;
    overflow: ${(props): string => (props.lock === true ? 'hidden' : 'auto')};
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Roboto', Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  svg {
    cursor: pointer
  }

  ul {
    list-style:none;
  }

  h1 {
    font-family: 'Anton', Helvetica, Arial;
  }

  li {
    list-style-type: none;
    text-transform: uppercase;
    font-family: 'Anton', Helvetica, Arial;
    font-size: 30px;
    cursor: pointer;
  }

  a {
    text-decoration:none;
  }
  
  @keyframes loadAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity:1
    }
  }

  ${(props): FlattenSimpleInterpolation => 
    props.theme === "dark" ? css `
      body {
        background-color: #444444;
        color: #fafafa;
      }
    ` 
    : css `
      body {
        background-color: #f0f0f0;
        color: #272727;
      }
    `
  }
`;

export default GlobalStyle;