import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
import { adminArray } from "../../routes/admin.route";
import { facultyArray } from "../../routes/faculty.route";
import { studentArray } from "../../routes/student.route";
import { baapArray } from "../../routes/baap.route";

const Sidebar = () => {
  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
    BAAP: "baap",
  };

  const role = "baap";
  let sidebarItems;
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarGenerator(adminArray, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarGenerator(facultyArray, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarGenerator(studentArray, userRole.STUDENT);
      break;
    case userRole.BAAP:
      sidebarItems = sidebarGenerator(baapArray, userRole.BAAP);
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>University</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
