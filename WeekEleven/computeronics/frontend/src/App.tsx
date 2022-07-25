import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Header from "./components/layout/Header";
import Login from "./components/modules/login";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Header />
    <Login />
  </ThemeProvider>
  );
}

export default App;
