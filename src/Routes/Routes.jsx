import { Create } from "../Pages/Create";
import Login from "../Pages/Auth/Login";
import Singup from "../Pages/Auth/Singup";
import Layout from "../Pages/Layout";
import { SelectPixels } from "../Pages/SelectPixles";
import ReviewOrder from "../Pages/ReviewOrder";
import Payment from "../Pages/Payment";
import { Congratulation } from "../Pages/Congratulation";
import Landing from "../Pages/Landing";
import NotFound from "../Pages/Error";
import Home from "../Pages/Dashboard/Home";
import MyPixels from "../Pages/Dashboard/MyPixels";
import History from "../Pages/Dashboard/History";

export const myRoutes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "MyPixels",
        element: <MyPixels />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },

  {
    path: "create",
    element: <Create />,
  },
 

  {
    path: "pixels",
    element: <SelectPixels />,
  },
  {
    path: "review",
    element: <ReviewOrder />,
  },
  {
    path: "payment",
    element: <Payment />,
  },
  {
    path: "cong",
    element: <Congratulation />,
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
    path: "*",
    element: <NotFound />,
  },
];
