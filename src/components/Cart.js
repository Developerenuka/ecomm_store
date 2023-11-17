import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  removeFromCart,
  clearCart,
} from "../actions";
import "./style.scss";
import Header from "../helpers/Header";
import Modal from "../helpers/Modal";
import WithLocalStorage from "../helpers/withLocalStorage";

/**
 * Cart component displays the items in the shopping cart and allows users to manage their selections.
 * @component
 * @returns {JSX.Element} - The rendered Cart component.
 */

const Cart = () => {
  // State and Redux hooks
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
// Effect to calculate total amount when cartProducts change
  useEffect(() => {
    if (cartProducts.length > 0) {
      const totalAmount = cartProducts.reduce((sum, item) => {
        return sum + item.quantity * item.price;
      }, 0);
      setAmount(totalAmount.toFixed(2));
      const subtotal = totalAmount + (13 / 100) * totalAmount;
      setTotal(subtotal.toFixed(2));
    }
  }, [cartProducts]);

   /**
   * Toggles the modal to confirm clearing the cart.
   */

  const changeModalStatus = () => {
    setShowModal(!showModal);
  };

  
  /**
   * Clears the entire shopping cart and close modal.
   */

  const clearCartItem = () => {
    dispatch(clearCart());
    setShowModal(false);
  };

  
  /**
   * Removes a specific item from the cart.
   * @param {number} productIndex - The index of the product to be removed.
   */

  const removeItem = (productIndex) => {
    // toSpliced give new array as output without altering existing array
    dispatch(removeFromCart(cartProducts.toSpliced(productIndex, 1)));
  };

  return (
    <div className="cart-container">
      {showModal && (
        // Render modal to confirm clearing the cart
        <Modal
          message="Are you sure you want to clear cart?"
          changeModalStatus={changeModalStatus}
          proceedAction={clearCartItem}
        />
      )}
      {/* Render header component */}
      <Header />
      {cartProducts.length > 0 ? (
        // Render cart items if products are in the cart
        <div className="content-wrap">
          <div className="cart-item-wrap">
            {cartProducts.map((item, index) => (
              // Render products present in cart
              <div className="cart-item-list" key={item.id}>
                <img src={item.image} alt="Products" />
                <div className="productInfo">
                  <h3>{item.title}</h3>
                  <div>Price: $ {item.price}</div>
                  <br/>
                  <div>Total: $ {item.price * item.quantity}</div>
                  <div>
                    <span className="cart-controls">
                    {/* Render quantity increase/decrease buttons */}
                      <button
                        onClick={() =>
                          dispatch(
                            handleDecreaseQuantity(item.id)
                          )
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(
                            handleIncreaseQuantity(item.id)
                          )
                        }
                      >
                        +
                      </button>
                    </span>
                    {/* Render Remove button to remove item from cart */}
                    <button
                      className="remove-item"
                      data-testid={`Remove-${item.id}`}
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Render summary of selections */}
          <div className="summary-wrap">
            <p>Amount: ${amount}</p>
            <p>Tax: 13%</p>
            <p>Total: {total}</p>
            {/* Render Clear cart button to remove everything from cart */}
            <button onClick={() => changeModalStatus()}>Clear Cart</button>
          </div>
        </div>
      ) : (
        // Render UI when no product present
        <div className="no-product">No product found...</div>
      )}
    </div>
  );
};

const CartWithLocalStorage = WithLocalStorage(Cart);

export default CartWithLocalStorage;
