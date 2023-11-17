import axios from "axios";

// to access loading stage of api's
export function showPageLoader(dispatch) {
  dispatch({
    type: "SHOW_PAGE_LOADER",
  });
}
// to stop loading stage
export function hidePageLoader(dispatch) {
  dispatch({
    type: "HIDE_PAGE_LOADER",
  });
}

// common action to show success or error message
export function showSuccessError(dispatch, response, response_type) {
  dispatch({
    type: "SHOW_ALERT",
    payload: { response: response.message, response_type },
  });

  setTimeout(function () {
    dispatch({
      type: "HIDE_ALERT",
    });
  }, 3000);
}

// action to get list of all products
export const getProducts = () => (dispatch) => {
  // loader start
  showPageLoader(dispatch);
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      dispatch({
        type: "GET_PRODUCTS",
        payload: response.data,
      });
    })
    .catch(function (error) {
      showSuccessError(dispatch, error, "error");
    })
    .finally(function () {
      // loader end
      hidePageLoader(dispatch);
    });
};

// action to manage items in cart
export const addToCart = (item) => (dispatch) => {
  dispatch({
    type: "ADD_PRODUCT",
    payload: item,
  });
};

// action to increase quantity of specific item
export const handleIncreaseQuantity = (productId) => (dispatch) => {
  dispatch({
    type: "INCREASE_QUANTITY",
    payload: productId,
  });
};

// action to decrease qunatity of specific item
export const handleDecreaseQuantity = (productId) => (dispatch) => {
  dispatch({
    type: "DECREASE_QUANTITY",
    payload: productId,
  });
};

// action to remove specific item form cart
export const removeFromCart = (item) => (dispatch) => {
  dispatch({
    type: "ADD_PRODUCT",
    payload: item,
  });
};

// action to remove all items for cart
export const clearCart = () => (dispatch) => {
  dispatch({
    type: "CLEAR_CART",
    payload: [],
  });
};
