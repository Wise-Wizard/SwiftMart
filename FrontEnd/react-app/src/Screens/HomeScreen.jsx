import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductScreen";
import axios from "axios";

function Home() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("http://localhost:8080/api/products");
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <>
      <Row>
        {Products.map((product) => {
          return (
            <Col key={product._id} md={3}>
              <ProductCard productDetails={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Home;
