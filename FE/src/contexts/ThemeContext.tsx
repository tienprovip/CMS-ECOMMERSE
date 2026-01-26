import { ConfigProvider } from "antd";
import React, { useEffect, useState, useMemo } from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const html = document.querySelector("html");

    if (isDark) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }

    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const value = useMemo(() => ({ isDark, toggleTheme }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              headerBg: isDark ? "#1f1f1f" : "#fffff",
              siderBg: isDark ? "#141414" : "#f7f7f7",
              bodyBg: isDark ? "#1e1e1e" : "#f0f2f5",
            },
            Menu: {
              darkItemBg: isDark ? "#141414" : "#f7f7f7",
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
