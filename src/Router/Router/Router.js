import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Page/ErrorPage/ErrorPage";
import Home from "../../Page/Home/Home/Home";
import Main from "../../Page/Main/Main";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }

])

export default router;