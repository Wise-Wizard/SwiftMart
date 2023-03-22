import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import Home from "./Screens/HomeScreen.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./Screens/ProductDetails";
import Cart from "./Screens/CartScreen.jsx";
import LoginScreen from "./Screens/LoginScreen.jsx";
import RegisterScreen from "./Screens/RegisterScreen.jsx";
import ProfileScreen from "./Screens/ProfileScreen.jsx";
// import Spline from "@splinetool/react-spline";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          {/* <Spline scene="https://prod.spline.design/ufgec588jlu77XD9/scene.splinecode" /> */}
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/register" element={<RegisterScreen />} exact />
            <Route path="/login" element={<LoginScreen />} exact />
            <Route path="/profile" element={<ProfileScreen />} exact />
            <Route path="/product/:id" element={<ProductPage />} exact />
            <Route path="/cart/:id?" element={<Cart />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
