import { createBrowserRouter } from "react-router";
import Homelayout from "../Layoutes/Mainlayout/Homelayout";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";

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
    path: "",
    element: <div>Hello World</div>,
  },
    {
    path: "",
    element: <div>Hello World</div>,
  },
    {
    path: "",
    element: <div>Hello World</div>,
  },
]);
export default router;