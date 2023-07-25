import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home"
import Register from "../pages/Register"
import SignIn from "../pages/SignIn"
import AddToCart from "../components/AddToCart"

export const router = createBrowserRouter([

{
    path:"/",
    element: <Home/>
},{
    path:"register",
    element: <Register/>
},
{
path:"add-to-cart",
element: <AddToCart/>
}
,
{
    path:"sign-in",
    element:<SignIn/>
}



])
