import Login from "../pages/Login";
import Layout from "@/pages/Layout";

import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "../components/AuthRoute";
const router=createBrowserRouter([
    {
        path:'/',
        element:<AuthRoute><Layout/></AuthRoute>,

    }
,{
        path:'/login',
        element:<Login/>
    }
])
export default router