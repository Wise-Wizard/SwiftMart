import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductScreen";
import productListAction from "../Actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";

function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.productList);
  const { loading, error, products } = allProducts;
  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} md={3}>
                <ProductCard productDetails={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
}

export default Home;
