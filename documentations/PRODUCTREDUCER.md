# Product Reducer Documentation

The `ProductReducer` is responsible for managing the state related to product data and loading indicators in your Redux store.

## Initial State

The initial state of the reducer includes the following properties:

- `isPageLoading`: Indicates whether the page is in a loading state.
- `showAlert`: Flag to control the visibility of alerts.
- `alertType`: The type of alert (e.g., "success", "error", "info" or "warning).
- `alertMessage`: The message to be displayed in the alert.
- `productList`: An array containing the list of products.

```javascript
const initialState = {
  isPageLoading: false,
  showAlert: false,
  alertType: "success",
  alertMessage: "",
  productList: [],
};
```

### 1. `SHOW_PAGE_LOADER` Action

- **Description:** Updates the state to indicate that the page loader should be shown.
- **State Changes:**
  ```javascript
  {
  ...state,
  isPageLoading: true,
  }
  ```

### 2. `HIDE_PAGE_LOADER` Action

- **Description:** Updates the state to indicate that the page loader should be hidden.
- **State Changes:**
  ```javascript
  {
  ...state,
  isPageLoading: false,
  }
  ```

### 3. `SHOW_ALERT` Action

- **Description:** Updates the state to show an alert with the specified type and message.
- **Parameters:**
  - `response_type` (string): Type of the responsecan be "success", "error", "info" or "warning".
- **State Changes:**
  ```javascript
  {
  ...state,
  showAlert: true,
  alertType: action.payload.response_type,
  alertMessage: action.payload.response,
  }
  ```

### 4. `GET_PRODUCTS` Action

- **Description:** Updates the state with the fetched product list.
- **Usage:** Dispatched when we got data from API's
- **Parameters:**
  - `payload` (array): Fetched product list from the API.
- **State Changes:**
  ```javascript
  {
  ...state,
  productList: action.payload,
  }
  ```

### 5. Default Action

- **Description:** Returns the current state if no recognized action type is provided.
- **State Changes:**
  ```javascript
  {
  ...state,
  }
  ```
