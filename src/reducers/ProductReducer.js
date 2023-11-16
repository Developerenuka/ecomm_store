const initialState = {
  productList: [],
};

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        productList: action.payload.data,
      };
    default:
      return state;
  }
}
