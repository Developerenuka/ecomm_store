import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Products from "../components/Products";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe("Products Component", () => {
  let store;
  it("Render UI when no product present", () => {
    // Mock the store state to simulate that there is no product
    const initialState = {
      products: {
        productList: [],
      },
      cart: {
        cartProducts: [],
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Products />
        </MemoryRouter>
      </Provider>
    );

    // Assert that "No product found" message is hown on screen
    const addToCartButton = screen.getByText("No product found...");
    expect(addToCartButton).toBeInTheDocument();
  });
  it("renders quantity increase/decrease buttons when the product is in the cart", () => {
    store = mockStore({
      products: {
        productList: [
          { id: 1, title: "Product 1", price: 10, image: "product1.jpg" },
        ],
        alertMessage: "",
        alertType: "success",
        showAlert: false,
        isPageLoading: false,
      },
      cart: {
        cartProducts: [{ id: 1, title: "Product 1", price: 10, quantity: 1 }],
      },
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Products />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
  });

  it('renders "Add to Cart" button when the product is not in the cart', () => {
    // Mock the store state to simulate that the product is not in the cart
    const initialState = {
      products: {
        productList: [
          { id: 1, title: "Product 1", price: 10, image: "product1.jpg" },
        ],
      },
      cart: {
        cartProducts: [],
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Products />
        </MemoryRouter>
      </Provider>
    );

    // Assert that the "Add to Cart" button is rendered
    const addToCartButton = screen.getByText("+ ADD");
    expect(addToCartButton).toBeInTheDocument();
  });
});
