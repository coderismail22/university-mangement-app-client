import { Button, Layout } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button
            onClick={() => logoutHandler()}
            style={{ marginLeft: "10px" }}
            icon={<LogoutOutlined />}
          >
            Logout
          </Button>
        </Header>
        <Content style={{ margin: "24px 16px 0", height: "100vh" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Nexus University ©{new Date().getFullYear()}
          <Link target="_blank" to="https://ismailcodes.netlify.app">
            {" "}
            | Ismail Codes
          </Link>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
