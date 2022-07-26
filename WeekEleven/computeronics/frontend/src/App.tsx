import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Header from "./components/layout/Header";
import Dashboard from "./components/modules/dashboard";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Header />
    <Dashboard/>
  </ThemeProvider>
  </>
  );
}

export default App;
