import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import About from "@/pages/About";
import AllProduct from "@/pages/AllProduct";
import Contact from "@/pages/Contact";
import DashboardLayout from "@/layout/Dashboardlayout";
import { routesGenerate } from "@/utils/routesGenerate";
import { adminPath } from "./dashboardRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "all-product",
        element: <AllProduct />,
      },
      {
        path: "contact",
        element: <Contact />,
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
    children: routesGenerate(adminPath),
  },
]);

export default router;
