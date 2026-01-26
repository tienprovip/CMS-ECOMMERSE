import { DashOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

type Props = {};

const AppSidebar = (props: Props) => {
  const items = [
    {
      key: "dashboard",
      icon: <DashOutlined />,
      label: "Dashboard",
    },
    {
      key: "products",
      icon: <ShoppingCartOutlined />,
      label: "Products",
    },
  ];

  const navigate = useNavigate();

  const handleNavigate = (e: any) => {
    navigate(`/${e.key}`);
  };

  const { isDark } = useContext(ThemeContext);

  return (
    <Sider trigger={null} collapsible>
      <div className="text-xl text-blue-600 font-bold text-center py-5">
        ADMIN PANEL
      </div>
      <Menu
        theme={isDark ? "dark" : "light"}
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={items}
        className="h-screen"
        onClick={handleNavigate}
      />
    </Sider>
  );
};

export default AppSidebar;
