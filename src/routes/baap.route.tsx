import { DashboardTwoTone, UserAddOutlined } from "@ant-design/icons";
import BaapBoard from "../pages/baap/BaapBoard";

export const baapArray = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: <DashboardTwoTone />,
    element: <BaapBoard />,
  },
  {
    name: "Family Management",
    children: [
      {
        name: "Son",
        path: "son",
        icon:<UserAddOutlined/>,
        element: "SON",
      },
      {
        name: "Daughter",
        path: "daughter",
        element: "DAUGHTER",
      },
      {
        name: "Wife",
        path: "wife",
        element: "WIFE",
      },
    ],
  },
];
