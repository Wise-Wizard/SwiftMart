import React, { useEffect } from "react";
import { Row, Col, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Rating from "../Components/Rating";
import { useDispatch, useSelector } from "react-redux";
import productDetailsAction from "../Actions/productDetailsAction";
import Loader from "../Components/Loader";
import Error from "../Components/Error";

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.productDetails);
  const { loading, error, product } = singleProduct;

  useEffect(() => {
    dispatch(productDetailsAction(id));
  }, [dispatch, id]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
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
      )}
    </div>
  );
}

export default ProductPage;
