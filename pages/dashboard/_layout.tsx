import { Inter } from "@next/font/google";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { ReactNode } from "react";
import { FiSun } from "react-icons/fi";
import {
  RiDashboardFill,
  RiHomeFill,
  RiMoonFill,
  RiNotificationFill,
  RiProfileFill,
  RiSettingsFill,
} from "react-icons/ri";
import Sidebar, { SidebarItem } from "@components/layouts/Sidebar";
import Navbar from "@components/layouts/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main
      className={clsx(
        "flex flex-col h-[100vh] max-w-[1600px] mx-auto",
        inter.className
      )}
    >
      <Navbar />
      <div className="flex flex-row flex-1 overflow-auto">
        <DashboardSidebar />
        <div className="p-4">{children}</div>
      </div>
    </main>
  );
}

function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarItem name="Home" icon={RiHomeFill} route="/dashboard" />
      <SidebarItem
        name="Profile"
        icon={RiProfileFill}
        route="/dashboard/profile"
      />
      <SidebarItem
        name="Notifications"
        icon={RiNotificationFill}
        route="/dashboard/notifications"
      />
      <div className="mt-auto" />
      <SidebarItem
        name="Settings"
        icon={RiSettingsFill}
        route="/dashboard/settings"
      />
    </Sidebar>
  );
}
