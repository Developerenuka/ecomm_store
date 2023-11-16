import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts, addToCart, handleIncreaseQuantity, handleDecreaseQuantity } from "../actions";
import "./style.scss";
const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const handleAddToCart = (item) => {
    dispatch(addToCart([...cartProducts, { ...item, quantity: 1 }]));
  };

  const getQuantity = (productId) => {
    const cartItem = cartProducts.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="productGrid">
      {productList.map((item) => (
        <div className="productInfo">
          <img src={item.image} alt="Products" />
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          {cartProducts.some(
            (cartItem) => cartItem.id === item.id && cartItem.quantity > 0
          ) ? (
            // Render quantity and increase/decrease buttons when the product is in the cart
            <div>
              <button
                onClick={() =>
                  dispatch(handleDecreaseQuantity(cartProducts, item.id))
                }
              >
                -
              </button>
              <span>{getQuantity(item.id)}</span>
              <button
                onClick={() =>
                  dispatch(handleIncreaseQuantity(cartProducts, item.id))
                }
              >
                +
              </button>
            </div>
          ) : (
            // Render "Add to Cart" button when the product is not in the cart
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          )}
        </div>
      ))}
      <Link to="/cart">
        <button>Go to Cart</button>
      </Link>
    </div>
  );
};

export default Products;
