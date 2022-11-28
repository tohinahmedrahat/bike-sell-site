import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Page/Blog/Blog";
import AddCategory from "../../Page/Dashboard/AddCategory/AddCategory";
import AddProduct from "../../Page/Dashboard/AddProduct/AddProduct";
import AllUser from "../../Page/Dashboard/AllUser/AllUser";
import Dashboard from "../../Page/Dashboard/Dashoard/Dashboard";
import MyOrder from "../../Page/Dashboard/MyOrder/MyOrder";
import MyProduct from "../../Page/Dashboard/MyProduct/MyProduct";
import ErrorPage from "../../Page/ErrorPage/ErrorPage";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import Main from "../../Page/Main/Main";
import Products from "../../Page/Product/Products/Products";
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
                path:"/category/:name",
                element:<Products></Products>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
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
                    },
                    {
                        path:"/dashboard",
                        element:<AddProduct></AddProduct>
                    },
                    {
                        path:"/dashboard/myproduct",
                        element:<MyProduct></MyProduct>
                    },
                    {
                        path:"/dashboard/myorder",
                        element:<MyOrder></MyOrder>
                    },
                    {
                        path:"/dashboard/alluser",
                        element:<AllUser></AllUser>
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