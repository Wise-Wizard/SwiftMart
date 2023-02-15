import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>SwiftMart</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
