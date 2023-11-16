import axios from "axios";
export const getProducts = () => (dispatch) => {
  // showPageLoader(dispatch);
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      dispatch({
        type: "GET_PRODUCTS",
        payload: response,
      });
    })
    .catch(function (error) {
      // dispatch(showSuccessError(error));
    })
    .finally(function () {
      // hidePageLoader(dispatch);
    });
};

export const addToCart = (item) => (dispatch) => {
  dispatch({
    type: "ADD_PRODUCT",
    payload: item,
  });
};

export const handleIncreaseQuantity =
  (cartProducts, productId) => (dispatch) => {
    const itemIndex = cartProducts.findIndex((item) => item.id === productId);

    if (itemIndex !== -1) {
      // Increase the quantity for the targeted product
      const updatedCartItems = [...cartProducts];
      updatedCartItems[itemIndex] = {
        ...updatedCartItems[itemIndex],
        quantity: updatedCartItems[itemIndex].quantity + 1,
      };
      dispatch(addToCart(updatedCartItems));
    }
  };

export const handleDecreaseQuantity =
  (cartProducts, productId) => (dispatch) => {
    const itemIndex = cartProducts.findIndex((item) => item.id === productId);

    // If the item is in the cart
    if (itemIndex !== -1 && cartProducts[itemIndex].quantity > 1) {
      const updatedCartItems = [...cartProducts];
      updatedCartItems[itemIndex] = {
        ...updatedCartItems[itemIndex],
        quantity: updatedCartItems[itemIndex].quantity - 1,
      };
      dispatch(addToCart(updatedCartItems));
    } else {
      // If the item is in the cart and its quantity is 1, remove the item from the cart
      const updatedCartItems = cartProducts.filter(
        (item) => item.id !== productId
      );
      dispatch(addToCart(updatedCartItems));
    }
  };

export const removeFromCart = (item) => (dispatch) => {
  dispatch({
    type: "ADD_PRODUCT",
    payload: item,
  });
};

export const clearCart = () => (dispatch) => {
  dispatch({
    type: "CLEAR_CART",
    payload: [],
  });
};
