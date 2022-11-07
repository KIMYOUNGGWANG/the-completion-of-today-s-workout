import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import React from "react";
import theme from "./theme/default";

interface Props {
  children: JSX.Element[] | JSX.Element;
}
const GlobalThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
