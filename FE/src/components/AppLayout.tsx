import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

type Props = {};

const AppLayout = (props: Props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppSidebar />

      <Layout>
        <AppHeader />
        <Content style={{ margin: "16px" }}>
          <div
            style={{
              padding: 24,
              background: "#fff",
              minHeight: 280,
              borderRadius: 8,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
