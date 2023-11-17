import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Products />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
