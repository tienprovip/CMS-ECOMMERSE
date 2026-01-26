import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

type Props = {};

const AppLayout = (props: Props) => {
  const { isDark } = useContext(ThemeContext);

  const pageBg = isDark ? "#0f0f0f" : "#f0f2f5";
  const cardBg = isDark ? "#141414" : "#ffffff";
  const cardBorder = isDark ? "1px solid #303030" : "1px solid #f0f0f0";
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppSidebar />

      <Layout>
        <AppHeader />
        <Content style={{ margin: "16px" }}>
          <div
            style={{
              padding: 24,
              background: cardBg,
              minHeight: 280,
              borderRadius: 8,
              border: cardBorder,
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
