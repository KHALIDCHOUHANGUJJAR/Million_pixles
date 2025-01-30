import { Create } from "../Pages/Auth/Create";
import Login from "../Pages/Auth/create/Login";
import Singup from "../Pages/Auth/create/Singup";
import Created2 from "../Pages/Created2";
import Home from "../Pages/Home";
import MyPixels from "../Pages/MyPixels";
import Layout from "../Pages/Layout";
import { SelectPixels } from "../Pages/SelectPixles";
export const myRoutes = [
  {
    path: "/",
    element: <Layout />,
  },

  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/create2",
    element: <Created2 />,
  },
  {
    path: "/MyPixels",
    element: <MyPixels />,
  },
  {
    path: "/Home",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/singup",
    element: <Singup />,
  },
  {
    path: "/pixels",
    element: <SelectPixels />,
  },
];
