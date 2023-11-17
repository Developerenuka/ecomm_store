# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements
Node Version: v20.9.0

## How to Run
**On Local**
1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

**generate docker instance**
docker image build -t ecomm_store:latest .
docker run -p 3000:3000 ecomm_store:latest

## Testing

Run tests using the following command:

```bash
npm run test
```

### Folder Structure
- /src
    - /actions
        - index.js
    - /components
        - Products.js
        - Cart.js
        - style.scss
    - /helpers
        - Header.js    for common header
        - Modal.js     to show modal in app
        - Toaster.js   common toaster to show alert msgs
    - /reducers
        - Cart.js
        - Product.js
    - /store
    - /test
        - Cart.test.js
        - Product.test.js

### Action
For action related information, refer to the [Actions Documentation](./documentations/ACTIONS.md).

### Reducers
two reducers are there to manage state of products and cart
For more detailed information, refer to the [Product Reducer Documentation](./documentations/PRODUCTREDUCER.md) and [Cart Reducer Documentation](./documentations/CARTREDUCER.md)