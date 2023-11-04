import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme[`white-200`]};
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif, Helvetica;
}

  input, select {
    outline: none;
    border-radius: 3px;
    border: 0.063rem solid ${(props) => props.theme.blueLight};
  }

  select, input[type="date"]{
    padding: 0.313rem;
    cursor: pointer;
  }
  label{
    font-size: 0.875rem;
    font-weight: 300;
    padding: 0 0.125rem;
    color: ${(props) => props.theme.blueLight}
  }
`;
