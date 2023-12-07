const initialState = {
  isPageLoading: false,
  showAlert: false,
  alertType: "success",
  alertMessage: "",
  productList: [],
};

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_PAGE_LOADER":
      return {
        ...state,
        isPageLoading: true,
      };
    case "HIDE_PAGE_LOADER":
      return {
        ...state,
        isPageLoading: false,
      };
    case "SHOW_ALERT":
      return {
        ...state,
        showAlert: true,
        alertType: action.payload.response_type,
        alertMessage: action.payload.response,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        productList: [...state.productList, ...action.payload],
      };
    default:
      return state;
  }
}
