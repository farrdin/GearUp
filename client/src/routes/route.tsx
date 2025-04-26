import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/local/Home";
import Login from "@/pages/common/Login";
import Register from "@/pages/common/Register";
import About from "@/pages/local/About";
import DashboardLayout from "@/layout/Dashboardlayout";
import App from "../App";
import CheckoutPage from "@/pages/dashboard/user/CheckoutPage";
import AllBicycle from "@/pages/local/AllBicycle";
import SingleBicycle from "@/pages/local/SingleBicycle";
import ErrorPage from "@/pages/common/ErrorPage";
import MyOrder from "@/pages/dashboard/user/MyOrder";
import Profile from "@/pages/dashboard/user/Profile";
import ManageOrder from "@/pages/dashboard/admin/ManageOrder";
import ManageUser from "@/pages/dashboard/admin/ManageUser";
import AdminDashboard from "@/pages/dashboard/admin/AdminDashboard";
import ManageBicycle from "@/pages/dashboard/admin/ManageBicycle";
import PrivateRoute from "./PrivateRoutes";
import DashboardRedirect from "./DashboardRedirect";

const router = createBrowserRouter([
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
    element: (
      <PrivateRoute role="customer">
        <CheckoutPage />,
      </PrivateRoute>
    ),
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
    children: [
      {
        index: true,
        element: <DashboardRedirect />,
      },
      {
        path: "home",
        element: (
          <PrivateRoute role="admin">
            <AdminDashboard />,
          </PrivateRoute>
        ),
      },
      {
        path: "bicycles",
        element: (
          <PrivateRoute role="admin">
            <ManageBicycle />
          </PrivateRoute>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRoute role="admin">
            <ManageUser />,
          </PrivateRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <PrivateRoute role="admin">
            <ManageOrder />,
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute role="customer">
            <Profile />,
          </PrivateRoute>
        ),
      },
      {
        path: "my-orders",
        element: (
          <PrivateRoute role="customer">
            <MyOrder />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
