import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import App from "../App";
import AboutPage from "../pages/AboutPage";
import MyOrdersPage from "../pages/MyOrdersPage";
import ProductsPage from "../pages/ProductsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "orders",
        element: <MyOrdersPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
    ],
  },
]);
