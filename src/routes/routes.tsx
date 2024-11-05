import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/shared/Login";
import Register from "../pages/shared/Register";

import { adminArray } from "./admin.route";
import { facultyArray } from "./faculty.route";
import { studentArray } from "./student.route";
import { routeGenerator } from "../utils/routeGenerator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminArray),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyArray),
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerator(studentArray),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
