import React from "react";
import { ThemeProvider } from "@emotion/react";
import Login from "./components/common/modules/login/index.tsx";
import Header from "./components/layout/Header.tsx";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Login />
    </ThemeProvider>
  );
}

export default App;
