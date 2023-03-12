import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "../Actions/cartAction";
import { useParams } from "react-router-dom";
function Cart() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(addToCart(id));
  });
  return <h1>Cart Component</h1>;
}
export default Cart;
