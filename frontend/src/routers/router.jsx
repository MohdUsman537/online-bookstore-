import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";


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
            element: <div>Orders</div>
        },
        {
            path:"/about",
            element: <div>About</div>
        },
        {
          path:"/login",
          element: <Login/>
        },{
          path:"/register",
          element: <div>Register</div>
        }
      ]
    },
  ]);

export default router;

