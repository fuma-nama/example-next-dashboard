import { Inter } from "@next/font/google";
import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";
import { RiHomeFill, RiNotificationFill, RiProfileFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import Sidebar, { SidebarItem } from "@components/layouts/Sidebar";
import Navbar from "@components/layouts/Navbar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export default function Layout(props: ComponentProps<"div">) {
  return (
    <main
      className={clsx(
        "flex flex-col h-[100vh] max-w-[1600px] mx-auto",
        inter.className
      )}
    >
      <Navbar />
      <div className="flex flex-row flex-1 overflow-visible">
        <DashboardSidebar />
        <div
          {...props}
          className={twMerge(
            "p-4 overflow-x-visible overflow-y-auto relative",
            props.className
          )}
        />
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
      <UserCard />
    </Sidebar>
  );
}

function UserCard() {
  const { data } = useSession();
  if (data == null || data.user == null) return <></>;

  return (
    <Link
      href="/dashboard/settings"
      className={clsx(
        "flex flex-row gap-2 items-center w-full p-2 rounded-xl",
        "transition-all cursor-pointer hover:bg-gray-300/60 dark:hover:bg-gray-800/60"
      )}
    >
      {data.user.image != null && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={data.user?.image}
          width="40"
          height="40"
          alt="avatar"
          className="aspect-square rounded-full h-auto"
        />
      )}
      <div className="flex-1 w-0">
        <p className="font-bold">{data.user.name}</p>
        <p
          className={clsx(
            "text-secondary text-sm text-ellipsis whitespace-nowrap overflow-hidden",
            "max-w-[140px] lg:max-w-none"
          )}
        >
          {data.user.email}
        </p>
      </div>
      <button className="ml-auto text-3xl" aria-label="Settings">
        <IoMdSettings />
      </button>
    </Link>
  );
}
