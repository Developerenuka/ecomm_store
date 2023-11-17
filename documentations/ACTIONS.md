# Action Documentation

The action page you provided includes various actions related to managing products and the shopping cart in a React application.

## Action Documentation

### 1. `showPageLoader` Action

- **Description:** Action to dispatch an event to show the page loader.
- **Parameters:**
  - `dispatch` (function): The dispatch function provided by the Redux store.

### Usage
showPageLoader(dispatch);

### 2. `hidePageLoader` Action

- **Description:** Action to dispatch an event to hide the page loader.
- **Parameters:**
  - `dispatch` (function): The dispatch function provided by the Redux store.

### Usage
hidePageLoader(dispatch);

### 3. `showSuccessError` Action

- **Description:** Common action to show success or error message for a specific duration.
- **Parameters:**
  - `dispatch` (function): The dispatch function provided by the Redux store.
  - `response` (object): The response object containing the message.
  - `response_type` (string): The type of response, either "success", "error" or "warning".

### Usage
showSuccessError(dispatch, response, 'success');

### 4. `getProducts` Action

- **Description:** Action to fetch the list of all products from the API.
- **Parameters:**
  - None
- **Asynchronous:** Yes
- **Dispatched Actions:**
  - "SHOW_PAGE_LOADER": To show the page loader.
  - "GET_PRODUCTS": To store the fetched products in the Redux store.
  - "HIDE_PAGE_LOADER": To hide the page loader.
  - "SHOW_ALERT": To show a success or error alert.
  - "HIDE_ALERT": To hide the alert after a timeout.

### Usage
getProducts()(dispatch);

### 5. `addToCart` Action

- **Description:** Action to add an item to the shopping cart.
- **Parameters:**
  - `item` (object): The product to be added to the cart.
- **Dispatched Actions:**
  - "ADD_PRODUCT": To add the specified item to the cart.

### Usage
addToCart(item)(dispatch);

### 6. `handleIncreaseQuantity` Action

- **Description:** Action to increase the quantity of a specific item in the cart.
- **Parameters:**
  - `productId` (number): The ID of the product for which the quantity should be increased.
- **Dispatched Actions:**
  - "INCREASE_QUANTITY": To increase the quantity of the specified item.

### Usage
handleIncreaseQuantity(productId)(dispatch);

### 7. `handleDecreaseQuantity` Action

- **Description:** Action to decrease the quantity of a specific item in the cart.
- **Parameters:**
  - `productId` (number): The ID of the product for which the quantity should be decreased.
- **Dispatched Actions:**
  - "DECREASE_QUANTITY": To decrease the quantity of the specified item.

### Usage
handleDecreaseQuantity(productId)(dispatch);

### 8. `removeFromCart` Action

- **Description:** Action to remove a specific item from the cart.
- **Parameters:**
  - `item` (object): The product to be removed from the cart.
- **Dispatched Actions:**
  - "ADD_PRODUCT": To remove the specified item from the cart.

### Usage
removeFromCart(item)(dispatch);

### 9. `clearCart` Action

- **Description:** Action to remove all items from the shopping cart.
- **Parameters:**
  - None
- **Dispatched Actions:**
  - "CLEAR_CART": To clear all items from the cart.

### Usage
clearCart()(dispatch);

