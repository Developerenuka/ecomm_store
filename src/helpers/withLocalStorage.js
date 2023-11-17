import React, { useEffect } from "react";
import { useSelector } from "react-redux";

/**
 * High Order Compoenet used to add data to localstorage os that data doesn't vanish on reload.
 * @component
 * @returns WrappedComponent.
 */

const WithLocalStorage = (WrappedComponent) => {
  return function WithLocalStorage(props) {
    const cartProducts = useSelector((state) => state.cart.cartProducts);

    // Use useEffect to listen for changes in cartProducts
    useEffect(() => {
      // Save cartProducts to local storage whenever it changes
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }, [cartProducts]);

    // Pass props to the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default WithLocalStorage;
