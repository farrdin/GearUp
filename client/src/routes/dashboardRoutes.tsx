import AdminDashboard from "@/pages/dashboard/admin/AdminDashboard";
import ManageOrder from "@/pages/dashboard/admin/ManageOrder";
import ManageProduct from "@/pages/dashboard/admin/ManageProduct";
import ManageUser from "@/pages/dashboard/admin/ManageUser";
import MyOrder from "@/pages/dashboard/user/MyOrder";
import Profile from "@/pages/dashboard/user/Profile";

export const DasboardRoutes = [
  {
    index: true,
    element: <AdminDashboard />,
  },
  {
    path: "manage-product",
    element: <ManageProduct />,
  },
  {
    path: "manage-user",
    element: <ManageUser />,
  },
  {
    path: "manage-order",
    element: <ManageOrder />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "orders",
    element: <MyOrder />,
  },
];
