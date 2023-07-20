import styled, { css } from 'styled-components';

// Defina o objeto responsivo
const responsive = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  xxl: '1400px',
};

// Crie mixins para os diferentes tamanhos responsivos
const sm = (content: any) => css`
  @media screen and (max-width: ${responsive.sm}) {
    ${content};
  }
`;

const md = (content: any) => css`
  @media screen and (max-width: ${responsive.md}) {
    ${content};
  }
`;

const lg = (content: any) => css`
  @media screen and (max-width: ${responsive.lg}) {
    ${content};
  }
`;

const xl = (content: any) => css`
  @media screen and (max-width: ${responsive.xl}) {
    ${content};
  }
`;

const xxl = (content: any) => css`
  @media screen and (max-width: ${responsive.xxl}) {
    ${content};
  }
`;

export { sm, md, lg, xl, xxl };
