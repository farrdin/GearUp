import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/local/Home";
import Login from "@/pages/common/Login";
import Register from "@/pages/common/Register";
import About from "@/pages/local/About";
import DashboardLayout from "@/layout/Dashboardlayout";
import { DasboardRoutes } from "./dashboardRoutes";
import App from "../App";
import CheckoutPage from "@/pages/dashboard/user/CheckoutPage";
import AllBicycle from "@/pages/local/AllBicycle";
import SingleBicycle from "@/pages/local/SingleBicycle";
import ErrorPage from "@/pages/common/ErrorPage";

const router = createBrowserRouter([
  {
    path: "error",
    element: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "bicycle",
        element: <AllBicycle />,
      },
      {
        path: "/bicycle/:id",
        element: <SingleBicycle />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: DasboardRoutes,
  },
]);

export default router;
