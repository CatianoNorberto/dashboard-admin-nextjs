'use client'

import { createGlobalStyle } from "styled-components";

import { colors } from './color'
import { lg } from '../styles/responsiveStyles';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body{
    background-color: ${colors.mainBg};
    color: ${colors.mainColor};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  .main {
    width: 100%;
    height: 100%;
  }

  .container {
    display: flex;
  }

  .menuContainer {
    width: 200px;
    padding: 5px 20px;
    border-right: 2px solid ${colors.softBg};

    ${lg`
      width: max-content;
    `}
  }

  .contentContainer {
    padding: 5px 20px;
    width: 85%;
  }
`