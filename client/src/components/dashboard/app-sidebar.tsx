import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { adminPath, userPath } from "@/routes/dashboardRoutes";
// import { userPath } from "@/routes/dashboardRoutes";
import { dashSidebarItemsGenerate } from "@/utils/dashSidebarItemsGenerate";
import { NavLink } from "react-router-dom";

export function AppSidebar() {
  //   const token = useAppSelector(useCurrentToken);

  // let user;

  // if (token) {
  //   user = verifyToken(token);
  // }

  const sidebarItems = dashSidebarItemsGenerate(adminPath);

  // switch ((user as TUser)!.role) {
  //   case userRole.ADMIN:
  //     sidebarItems = dashSidebarItemsGenerate(adminPath, userRole.ADMIN);
  //     break;

  //   case userRole.USER:
  //     sidebarItems = dashSidebarItemsGenerate(userPath, userRole.USER);
  //     break;

  //   default:
  //     break;
  // }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <NavLink
              to="/"
              className="text-xl text-green-500 font-bold text-center w-full"
            >
              GEARUP
            </NavLink>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item?.title}>
                  <SidebarMenuButton asChild>{item?.url}</SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
