import { Avatar, Dropdown, type MenuProps } from "antd";
import { MoonOutlined, UserOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";

type Props = {};

const items: MenuProps["items"] = [
  {
    key: "profile",
    label: "Profile",
  },
  {
    key: "logout",
    label: "Logout",
  },
];

const AppHeader = (props: Props) => {
  return (
    <Header className="flex justify-between items-center px-6 shadow-sm !h-16">
      <div />
      <div className="flex items-center gap-4">
        <button className="text-lg cursor-pointer hover:text-blue-500 transition-colors">
          <MoonOutlined />
        </button>

        <Dropdown menu={{ items }} placement="bottomRight">
          <Avatar
            size={"large"}
            icon={<UserOutlined />}
            className="cursor-pointer"
          />
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
