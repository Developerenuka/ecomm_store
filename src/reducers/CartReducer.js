const initialState = {
  cartProducts: JSON.parse(localStorage.getItem("cartProducts"))
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [],
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        cartProducts: action.payload,
      };

    case "INCREASE_QUANTITY":
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        // Increase the quantity for the targeted product
        const updatedCartItems = [...state.cartProducts];
        updatedCartItems[itemIndex] = {
          ...updatedCartItems[itemIndex],
          quantity: updatedCartItems[itemIndex].quantity + 1,
        };
        return { ...state, cartProducts: updatedCartItems };
      }
      break;

    case "DECREASE_QUANTITY":
      const itemIndex1 = state.cartProducts.findIndex(
        (item) => item.id === action.payload
      );

      // If the item is in the cart and quantity is greater than 1, then decrease quantity else remove item from cart
      if (itemIndex1 !== -1 && state.cartProducts[itemIndex1].quantity > 1) {
        const updatedCartItems = [...state.cartProducts];
        updatedCartItems[itemIndex1] = {
          ...updatedCartItems[itemIndex1],
          quantity: updatedCartItems[itemIndex1].quantity - 1,
        };
        return { ...state, cartProducts: updatedCartItems };
      } else {
        const updatedCartItems = state.cartProducts.filter(
          (item) => item.id !== action.payload
        );
        return { ...state, cartProducts: updatedCartItems };
      }

    case "CLEAR_CART":
      return {
        ...state,
        cartProducts: action.payload,
      };
    default:
      return state;
  }
}
