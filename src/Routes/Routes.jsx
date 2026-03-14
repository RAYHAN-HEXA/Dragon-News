import { createBrowserRouter } from "react-router";
import Homelayout from "../Layoutes/HomeLayout/Homelayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>
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