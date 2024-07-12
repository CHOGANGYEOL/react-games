import { createGlobalStyle } from 'styled-components';

import { barStyle } from '../../assets/styles/scroll';
import { CustomToastStyle } from '../reactToastify/CustomStyle';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    font-size:62.5%;
  }
  body {
    margin: 0;
    font-size: 1.6rem;
    ${barStyle()}
    font-family: "Noto Sans KR", sans-serif;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }
  table, th, td {
    border:1px solid ${({ theme }) => theme.colors.black};
    border-collapse: collapse;
  }
  th, td {
    padding:0.4rem;
  }

  a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.black}
  }
  a, button  {
    outline:none;
  }
  input,textarea {
      outline: none;
      caret-color: ${({ theme }) => theme.colors.primary[600]};
      ::placeholder {
          color: ${({ theme }) => theme.colors.gray[600]};
      }
  }
  img {
    max-width: 100%;
  }
  ${CustomToastStyle}
`;

export const ScrollFix = createGlobalStyle`
  html {
    overflow: hidden;
  }
`;
export default ScrollFix;
