import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.scss';
const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  console.log("cartProducts", cartProducts);
  return (
    <div className="productGrid">
      {cartProducts.map((item) => (
        <div className="productInfo">
          <img src={item.image} alt="Products" />
          <h3>{item.title}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
