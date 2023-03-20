import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);

function App() {
  return (
    <section className="container">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;;