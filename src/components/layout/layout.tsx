import React from "react";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/context/themeProvider";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-800 overflow-x-hidden relative">
        <Navbar />
        <div className="">{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
