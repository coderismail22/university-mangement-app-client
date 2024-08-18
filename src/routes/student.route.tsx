import SelectedCourses from "../pages/student/SelectedCourses";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentArray = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Selected Courses",
    path: "selected-courses",
    element: <SelectedCourses />,
  },
];
