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

export function AppSidebar() {
  const sidebarItems = [
    {
      title: "Home",
      url: "/dashboard",
      icon: <Home className="w-5 h-5" />,
    },
    {
      title: "Manage Product",
      url: "/dashboard/manage-product",
      icon: <PackageSearch className="w-5 h-5" />,
    },
    {
      title: "Manage User",
      url: "/dashboard/manage-user",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Manage Order",
      url: "/dashboard/manage-order",
      icon: <ClipboardList className="w-5 h-5" />,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: <ClipboardList className="w-5 h-5" />,
    },
    {
      title: "My Orders",
      url: "/dashboard/orders",
      icon: <ClipboardList className="w-5 h-5" />,
    },
  ];

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
                    end={item.url === "/dashboard"} // Make Home match only exact
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
