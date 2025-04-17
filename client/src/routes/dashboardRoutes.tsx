import App from "@/App";
import ManageProduct from "@/pages/dashboard/admin/ManageProduct";
import ManageUser from "@/pages/dashboard/admin/ManageUser";
import ManageOrders from "@/pages/dashboard/user/ManageOrders";
import Profile from "@/pages/dashboard/user/Profile";

export const adminPath = [
  {
    name: "Home",
    path: "home",
    element: <App />,
  },
  {
    name: "Admin",
    children: [
      {
        name: "Manage Product",
        path: "manage-product",
        element: <ManageProduct />,
      },
      {
        name: "Manage Users",
        path: "manage-users",
        element: <ManageUser />,
      },
    ],
  },
];
export const userPath = [
  {
    name: "Home",
    path: "home",
    element: <App />,
  },

  {
    name: "User",
    children: [
      {
        name: "Manage Orders",
        path: "manage-orders",
        element: <ManageOrders />,
      },
      {
        name: "Profile",
        path: "Profile",
        element: <Profile />,
      },
    ],
  },
];
