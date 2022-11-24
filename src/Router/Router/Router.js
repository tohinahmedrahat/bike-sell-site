import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Page/ErrorPage/ErrorPage";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import Main from "../../Page/Main/Main";
import Regester from "../../Page/Regester/Regester";

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
            }
        ]
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }

])

export default router;