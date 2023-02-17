import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import Home from "./Screens/HomeScreen.jsx";
// import Spline from "@splinetool/react-spline";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>SwiftMart</h1>
          {/* <Spline scene="https://prod.spline.design/ufgec588jlu77XD9/scene.splinecode" /> */}
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
