import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import EditProducts from "../../Pages/Product/EditProducts";
import AddProducts from "../../Pages/Product/AddProducts";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Analytics from "../../Pages/Analytics/Analytics";
import Invoice from "../../Pages/Invoice/Invoice";
import Customer from "../../Pages/Customers/Customer";
import ExpireProducts from "../../Pages/Product/ExpireProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/product/edit-products",
        element: <EditProducts></EditProducts>,
      },
      {
        path: "/product/add-product",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/product/expired",
        element: <ExpireProducts></ExpireProducts>
      },
      {
        path: "/analytics",
        element: <Analytics></Analytics>,
      },
      {
        path: "/invoice",
        element: <Invoice></Invoice>,
      },
      {
        path: "/customers",
        element: <Customer></Customer>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
