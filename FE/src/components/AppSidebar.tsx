import { DashOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useNavigate } from "react-router-dom";

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

  return (
    <Sider trigger={null} collapsible>
      <div className="text-xl text-blue-600 font-bold text-center py-5">
        ADMIN PANEL
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        className="h-screen"
        onClick={handleNavigate}
      />
    </Sider>
  );
};

export default AppSidebar;
