import { createBrowserRouter } from "react-router";
import Homelayout from "../Layoutes/Mainlayout/Homelayout";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children :[
      {
        path : '/',
        element : <Home></Home>
      }
      ,
      {
        path : '/categroy/:id',
        element : <CategoryNews></CategoryNews>,
        loader : ()=> fetch('../../public/news.json')
      }


    ]
  },
    {
    path: "/auth",
    element: <h2>Authentication Layout</h2> ,
    children : [
      {
    path: "/auth/register",
    element: <Register></Register>,
  },
    {
   path: "/auth/login",
    element:<Login></Login>
  },
    ]
  },
    
]);
export default router;