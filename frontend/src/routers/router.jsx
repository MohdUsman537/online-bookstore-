import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckOutPage from "../pages/books/CheckOutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";


// Router Directory(Entry Point)
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/orders",
            element: <PrivateRoute><OrderPage/></PrivateRoute>
        },
        {
            path:"/about",
            element: <div>About</div>
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path:"/register",
          element: <Register/>
        },
        {
          path: "/cart",
          element: <CartPage/>
        },
        {
          path: "/checkout",
          element: <PrivateRoute><CheckOutPage/></PrivateRoute> // wrapping
        },
        {
          path: "/books/:id",
          element: <SingleBook/>
        }
      ]
    },
    {
      path: "/admin",
      element: <AdminLogin/>
    },
    {
      path: "/dashboard",
      element:<AdminRoute><DashboardLayout/></AdminRoute>,
      children: [
        {
           path: " ",
           element: <AdminRoute><Dashboard/></AdminRoute>
        },
        {
           path: "add-new-book",
           element:<AdminRoute><div>Add Book</div></AdminRoute>
        },
        {
          path: "edit-book/:id",
          element: <AdminRoute><div>Edit Book</div></AdminRoute>
        },
        {
          path: "manage-books",
          element: <AdminRoute><Manage Books/></AdminRoute>
        }
      ]

    }
  ]);

export default router;

