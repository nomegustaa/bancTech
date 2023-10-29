import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme[`white-200`]};
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif, Helvetica;
}
`;
