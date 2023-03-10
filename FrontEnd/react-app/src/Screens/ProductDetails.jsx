import React, { useState, useEffect } from "react";
import { Row, Col, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Rating from "../Components/Rating";
import axios from "axios";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProductsDetails = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/api/products/${id}`
      );
      setProduct(data);
    };
    getProductsDetails();
  }, [id, product]);
  return (
    <div>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.image} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem variant="primary">
              <h2>{product.name}</h2>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={product.rating}></Rating>
              <h5>{product.numReviews} reviews</h5>
            </ListGroupItem>
            <ListGroupItem variant="primary">
              <h5>Price: {product.price}$</h5>
            </ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col>
                  <h3>Status:</h3>
                </Col>
                <Col>
                  <h3>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </h3>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem variant="primary">
              <div class="text-center">
                <button>
                  <span>
                    <h5>Add to Cart</h5>
                  </span>
                </button>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ProductPage;
