import { Avatar, Dropdown, type MenuProps } from "antd";
import { BulbOutlined, MoonOutlined, UserOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

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
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <Header className="flex justify-between items-center px-6 shadow-sm !h-16">
      <div />
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-lg cursor-pointer hover:text-blue-500 transition-colors"
        >
          {isDark ? <BulbOutlined /> : <MoonOutlined />}
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
