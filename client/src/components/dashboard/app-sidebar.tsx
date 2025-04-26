import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import { Home, PackageSearch, Users, ClipboardList } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

export function AppSidebar() {
  interface User {
    role: "admin" | "customer";
  }

  const user = useAppSelector(selectCurrentUser) as User | null;
  const userRole: "admin" | "customer" = user?.role || "customer";
  const allSidebarItems = {
    admin: [
      {
        title: "Home",
        url: "home",
        icon: <Home className="w-5 h-5" />,
      },
      {
        title: "Manage Bicycles",
        url: "bicycles",
        icon: <PackageSearch className="w-5 h-5" />,
      },
      {
        title: "Manage User",
        url: "users",
        icon: <Users className="w-5 h-5" />,
      },
      {
        title: "Manage Order",
        url: "orders",
        icon: <ClipboardList className="w-5 h-5" />,
      },
    ],
    customer: [
      {
        title: "Profile",
        url: "/dashboard/profile",
        icon: <ClipboardList className="w-5 h-5" />,
      },
      {
        title: "My Orders",
        url: "/dashboard/my-orders",
        icon: <ClipboardList className="w-5 h-5" />,
      },
    ],
  };

  const sidebarItems = allSidebarItems[userRole];

  return (
    <Sidebar className="bg-white text-black shadow-lg border-r w-64">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="py-6 border-b">
            <NavLink
              to="/"
              className="w-full flex justify-center items-center gap-2"
            >
              <img src="/logo.png" alt="GearUp Logo" className="h-9" />
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-secondary">G</span>ear
                <span className="text-secondary">U</span>p
              </span>
            </NavLink>
          </SidebarGroupLabel>

          <SidebarGroupContent className="py-4">
            <SidebarMenu className="flex flex-col gap-1">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <NavLink
                    to={item.url}
                    end={item.url === "/dashboard"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-gray-800 hover:bg-gray-100"
                      }`
                    }
                  >
                    {item.icon}
                    {item.title}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
