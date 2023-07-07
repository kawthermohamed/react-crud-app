import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Contacts from "./component/Contacts";
import AddProduct from "./component/Addproduct";
import Concard from "./component/contactcard";
import EditProduct from "./component/editProduct";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/contacts",
    element: <Contacts />
  },
  {
    path: "/contacts/add",
    element: <AddProduct />
  },
  {
    path: "/contacts/:Id",
    element: <Concard />
  },
  {
    path: "/contacts/editproduct/:Id",
    element: <EditProduct />
  }
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
