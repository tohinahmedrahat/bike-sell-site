import { createBrowserRouter } from "react-router-dom";
import Home from "../../Page/Home/Home";
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
    }
])

export default router;