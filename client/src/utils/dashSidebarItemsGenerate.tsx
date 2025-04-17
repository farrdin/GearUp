import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "@/types";

export const dashSidebarItemsGenerate = (items: TUserPath[]) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        title: item.name,
        url: <NavLink to={`/dashboard/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          title: child.name!,
          url: (
            <NavLink
              to={`/dashboard/${child.path}`}
              className={({ isActive }) =>
                isActive ? "text-red-500 font-semibold" : "text-gray-600"
              }
            >
              {child.name}
            </NavLink>
          ),
        });
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
