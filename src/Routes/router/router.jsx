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
import Product from "../../Pages/Product/Product";
import EditCard from "../../Pages/Invoice/EditCard";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Main></Main>
      </PrivateRouter>
    ),
    children: [
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      },
      {
        path: "/",
        element: (
          <PrivateRouter>
            <Dashboard></Dashboard>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRouter>
            <Dashboard></Dashboard>
          </PrivateRouter>
        ),
      },
      {
        path: "/products",
        element: (
          <PrivateRouter>
            <Product></Product>
          </PrivateRouter>
        ),
      },
      {
        path: "/product/edit-products",
        element: (
          <PrivateRouter>
            <EditProducts></EditProducts>
          </PrivateRouter>
        ),
      },
      {
        path: "/product/add-product",
        element: (
          <PrivateRouter>
            <AddProducts></AddProducts>
          </PrivateRouter>
        ),
      },
      {
        path: "/product/expired",
        element: (
          <PrivateRouter>
            <ExpireProducts></ExpireProducts>
          </PrivateRouter>
        ),
      },
      {
        path: "/analytics",
        element: (
          <PrivateRouter>
            <Analytics></Analytics>
          </PrivateRouter>
        ),
      },
      {
        path: "/invoice",
        element: (
          <PrivateRouter>
            <Invoice></Invoice>
          </PrivateRouter>
        ),
      },
      {
        path: "/invoice/cart-edit",
        element: (
          <PrivateRouter>
            <EditCard></EditCard>
          </PrivateRouter>
        ),
      },
      {
        path: "/customers",
        element: (
          <PrivateRouter>
            <Customer></Customer>
          </PrivateRouter>
        ),
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
