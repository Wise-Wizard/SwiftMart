import React from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../products";
import ProductCard from "./ProductScreen";

function Home() {
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
