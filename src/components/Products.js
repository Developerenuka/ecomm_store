import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getProducts,
  addToCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
} from "../actions";
import "./style.scss";
import Header from "../helpers/Header";
import Toaster from "../helpers/Toaster";
import WithLocalStorage from "../helpers/withLocalStorage";


/**
 * Products component displays a list of products and allows users to add them to the cart.
 * @component
 * @returns {JSX.Element} - The rendered Products component.
 */
const Products = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const productReducer = useSelector((state) => state.products);
  const { productList, alertMessage, alertType, showAlert, isPageLoading } =
    productReducer;
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // to get total amount of selected items
  useEffect(() => {
    if (cartProducts.length > 0) {
      const totalAmount = cartProducts.reduce((sum, item) => {
        return sum + item.quantity * item.price;
      }, 0);
      setAmount(totalAmount.toFixed(2));
    }
  }, [cartProducts]);

  /**
   * Handles the "Add to Cart" button click, dispatches addToCart action.
   * @param {Object} item - The product item to be added to the cart.
   */

  const handleAddToCart = (item) => {
    dispatch(addToCart([...cartProducts, { ...item, quantity: 1 }]));
  };

  /**
   * Gets the quantity of a product in the cart.
   * @param {number} productId - The ID of the product.
   * @returns {number} - The quantity of the product in the cart.
   */

  const getQuantity = (productId) => {
    const cartItem = cartProducts.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <>
      {isPageLoading ? (
        // Render loading message if the page is still loading
        <div className="loading">loading...</div>
      ) : (
        <div className="product-container">
          {/* Render toaster for displaying alerts */}

          <Toaster
            alertMessage={alertMessage}
            alertType={alertType}
            showAlert={showAlert}
          />
          {/* Render header component */}

          <Header />

          {productList.length !== 0 ? (
            // Render product grid if products are available

            <div className="product-grid">
              {productList.map((item) => (
                // Render each product item

                <div
                  className="product-list"
                  data-testid={`list-${item.id}`}
                  key={item.id}
                >
                  <img src={item.image} alt="Products" />
                  <div className="product-info">
                    <h3>{item.title}</h3>
                    <p>$ {item.price}</p>
                    {cartProducts.some(
                      (cartItem) =>
                        cartItem.id === item.id && cartItem.quantity > 0
                    ) ? (
                      // Render quantity increase/decrease buttons when the product is in the cart
                      <div className="cart-controls">
                        <button
                          data-testid={`decrease-button-${item.id}`}
                          onClick={() =>
                            dispatch(handleDecreaseQuantity(item.id))
                          }
                        >
                          -
                        </button>
                        <span data-testid={`quantity-${item.id}`}>
                          {getQuantity(item.id)}
                        </span>
                        <button
                          data-testid={`increase-button-${item.id}`}
                          onClick={() =>
                            dispatch(handleIncreaseQuantity(item.id))
                          }
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      // Render "Add to Cart" button when the product is not in the cart
                      <button
                        className="add-to-cart"
                        onClick={() => handleAddToCart(item)}
                      >
                        + ADD
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Render UI when no product present
            <div className="no-product">No product found...</div>
          )}

          <footer>
            <span className="total">$ {amount}</span>
            <div className="cart-button">
              <Link to="/cart">Cart</Link>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

const ProductsWithLocalStorage = WithLocalStorage(Products);

export default ProductsWithLocalStorage;
