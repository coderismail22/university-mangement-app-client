import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types";

//* Dynamic Admin Sidebar Items
export const sidebarGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        icon: item.icon,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        icon: item.icon,
        children: item.children.map((child) => ({
          key: child.name,
          icon:child.icon,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);
  return sidebarItems;
};

//!Sidebar Result:
// const sidebarMenu = [
//   {
//     key: "Dashboard",
//     label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "Create Admin",
//         label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//       },
//       {
//         key: "Create Faculty",
//         label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
//       },
//       {
//         key: "Create Student",
//         label: <NavLink to="/admin/create-student">Create Student</NavLink>,
//       },
//       {
//         key: "Create Member",
//         label: <NavLink to="/admin/create-member">Create Member</NavLink>,
//       },
//     ],
//   },
// ];
