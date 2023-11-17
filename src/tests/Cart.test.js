import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import Cart from "../components/Cart";
import { act } from "react-dom/test-utils";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe("Cart Component", () => {
  let store;
  it("Render UI when no cart items present", () => {
    // Mock the store state to simulate that there is no product
    const initialState = {
      cart: {
        cartProducts: [], // Empty cart
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );

    // Assert that the "Add to Cart" button is rendered
    const addToCartButton = screen.getByText("No product found...");
    expect(addToCartButton).toBeInTheDocument();
  });
  it("renders quantity increase/decrease and Remove buttons when the product is in the cart", () => {
    store = mockStore({
      cart: {
        cartProducts: [{ id: 1, title: "Product 1", price: 10, quantity: 1 }],
      },
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("Remove")).toBeInTheDocument();
  });

  it("renders empty cart using clear cart button", () => {
    store = mockStore({
      cart: {
        cartProducts: [{ id: 1, title: "Product 1", price: 10, quantity: 1 }],
      },
    });
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Cart />
          </MemoryRouter>
        </Provider>
      );
    });
    //
    expect(screen.getByText("Clear Cart")).toBeInTheDocument();
    act(() => {
      // Click the "Clear Cart" button
      fireEvent.click(screen.getByText("Clear Cart"));
    });
    expect(
      screen.getByText("Are you sure you want to clear cart?")
    ).toBeVisible();

    expect(screen.getByTestId("proceedAction")).toBeInTheDocument();
    act(() => userEvent.click(screen.getByTestId("proceedAction")));
    screen.findByText("No product found...");
  });
});
