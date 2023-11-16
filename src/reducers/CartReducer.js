const initialState = {
  cartProducts: [],
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        cartProducts: action.payload,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartProducts: action.payload,
      };
    default:
      return state;
  }
}
