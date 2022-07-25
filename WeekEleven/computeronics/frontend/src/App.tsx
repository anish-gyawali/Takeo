import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Login from "./components/common/modules/login";
import Header from "./components/layout/Header";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Header />
    <Login />
  </ThemeProvider>
  );
}

export default App;
