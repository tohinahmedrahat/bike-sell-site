import { createBrowserRouter } from "react-router-dom";
import AddCategory from "../../Page/Dashboard/AddCategory/AddCategory";
import AddProduct from "../../Page/Dashboard/AddProduct/AddProduct";
import Dashboard from "../../Page/Dashboard/Dashoard/Dashboard";
import ErrorPage from "../../Page/ErrorPage/ErrorPage";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import Main from "../../Page/Main/Main";
import Regester from "../../Page/Regester/Regester";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/regester",
                element:<Regester></Regester>
            },
            {
                path:"/dashboard",
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children:[
                    {
                        path:"/dashboard/addcategory",
                        element:<AddCategory></AddCategory>
                    },
                    {
                        path:"/dashboard/addproduct",
                        element:<AddProduct></AddProduct>
                    }
                ]
            }
        ]
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }

])

export default router;