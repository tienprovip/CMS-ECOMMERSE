import Sider from "antd/es/layout/Sider";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React from "react";
import { Menu } from "antd";

type Props = {};

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const AppSidebar = (props: Props) => {
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
      />
    </Sider>
  );
};

export default AppSidebar;
