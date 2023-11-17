# Cart Reducer Documentation

The `CartReducer` manages the state related to the shopping cart in your Redux store.

## Initial State

The initial state of the reducer includes the following property:

- `cartProducts`: An array containing the products added to the shopping cart.

```javascript
const initialState = {
  cartProducts: [],
};
```

### 1. `ADD_PRODUCT` Action

- **Description:** Adds a product to the shopping cart.
- **Usage:** Dispatched when a user adds a product to the cart.
- **Parameters:**
  `payload` (array): An array containing the updated list of cart products.
- **State Changes:**
  ```javascript
  return {
    ...state,
    cartProducts: action.payload,
  };
  ```

### 2. `INCREASE_QUANTITY` Action

- **Description:** Increases the quantity of a specific product in the cart.
- **Usage:** Dispatched when a user increases the quantity of a product in the cart.
- **Parameters:**
  `payload` (number): The product ID for which the quantity needs to be increased.
- **Behavior:**
    - If the product is already in the cart, the quantity is increased by 1.
    - If the product is not in the cart, it is added with a quantity of 1.
- **Logic:** first check if record present in array, if yes then increase its quantity by 1


### 3. `DECREASE_QUANTITY` Action

- **Description:** Decreases the quantity of a specific product in the cart.
- **Usage:** Dispatched when a user decreases the quantity of a product in the cart.
- **Parameters:**
  `payload` (number): The product ID for which the quantity needs to be decreased.
- **Behavior:**
    - If the product quantity is greater than 1, decrease the quantity by 1.
    - If the product quantity is 1, remove the product from the cart.
- **Logic:** first check if record present in array and its quantity is greater than 1, if yes then decrease its quantity by 1, otherwise get new array by filtering out item that needs to be removed

### 4. `CLEAR_CART` Action

- **Description:** Clears all items from the shopping cart.
- **Usage:** Dispatched when a user decides to clear the entire cart.
- **Parameters:**
  `payload` (array): An empty array, indicating an empty cart.

### 5. Default Action

- **Description:** Returns the current state if no recognized action type is provided.
- **State Changes:**
  ```javascript
  {
  ...state,
  }
  ```
