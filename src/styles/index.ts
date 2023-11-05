import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme[`white-200`]};
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif, Helvetica;
}

  input {
    outline: none;
    border-radius: 3px;
    border: 1px solid ${(props) => props.theme.blueLight};
  }

  input[type="date"]{
    padding: 0.313rem;
    cursor: pointer;
  }
  label{
    font-size: 0.875rem;
    font-weight: 300;
    padding: 0 0.125rem;
    color: ${(props) => props.theme.blueLight};

  }

  button{
    font-family: 'Roboto', sans-serif, Helvetica;
  }
`;
