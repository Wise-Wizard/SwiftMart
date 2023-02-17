import React from "react";
import { Card } from "react-bootstrap";

function ProductCard(props) {
  return (
    <>
      <Card
        border="danger"
        style={{ width: "18rem" }}
        className="my-3 p-3 rounded"
        bg="primary"
      >
        <a href={`/product/${props.productDetails._id}`}>
          <Card.Img src={props.productDetails.image} variant="top"></Card.Img>
          <Card.Title>{props.productDetails.name}</Card.Title>
          <Card.Subtitle>{props.productDetails.price} $</Card.Subtitle>
        </a>
      </Card>
    </>
  );
}

export default ProductCard;
