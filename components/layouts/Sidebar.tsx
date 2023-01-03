import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { IconType } from "react-icons";

export default function Sidebar({ children }: { children: ReactNode }) {
  return (
    <div
      className={clsx(
        "w-[17rem] h-full backdrop-blur-md px-5 pt-3 pb-5",
        "bg-white/50 dark:bg-black/50",
        "hidden sm:flex flex-col gap-2 items-stretch"
      )}
    >
      {children}
    </div>
  );
}

type SidebarItemProps = {
  name: string;
  icon: IconType;
  route: string;
};

export function SidebarItem({ name, icon: Icon, route }: SidebarItemProps) {
  const path = useRouter().asPath;
  const active = route === path;

  return (
    <Link href={route}>
      <button
        className={clsx(
          "w-full px-6 py-3 text-left rounded-xl",
          "flex flex-row gap-2 items-center font-bold",
          active
            ? "text-blue-600/90 bg-blue-400/20 dark:text-blue-400 dark:bg-blue-800/20"
            : "bg-transparent"
        )}
      >
        <Icon />
        {name}
      </button>
    </Link>
  );
}
