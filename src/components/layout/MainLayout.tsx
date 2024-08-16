import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const items: MenuProps["items"] = [
  {
    key: "admin",
    label: "Admin",
    children: [
      {
        key: "createStudent",
        label: "Create Student",
      },
      {
        key: "updateStudent",
        label: "Update Student",
      },
      {
        key: "deleteStudent",
        label: "Delete Student",
      },
    ],
  },
  {
    key: "faculty",
    label: "Faculty",
  },
  {
    key: "student",
    label: "Student",
  },
];
const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
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
        <div style={{padding:"1rem"}}>
        <h1 style={{textAlign:"center"}}>North Bengal University</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Here is my content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
