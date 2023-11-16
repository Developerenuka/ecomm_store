import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";

export default combineReducers({
  products: ProductReducer,
  cart: CartReducer,
});
