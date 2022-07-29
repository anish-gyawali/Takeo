import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import { theme } from "./theme";

import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import content from "./content";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
