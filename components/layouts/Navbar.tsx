import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import { RiDashboardFill } from "react-icons/ri";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav
      className={clsx(
        "bg-white/50 dark:bg-black/60 backdrop-blur-lg sticky top-0",
        "px-5 sm:px-11 h-16 w-full items-center justify-between",
        "flex flex-row gap-3"
      )}
    >
      <Link
        className="flex flex-row gap-2 items-center cusror-pointer"
        href="/"
      >
        <RiDashboardFill className="text-xl" />
        <h2 className="text-lg font-bold">Dashboard</h2>
      </Link>

      <div className="flex flex-row gap-3 items-center">
        <UserCard />
        <button
          className="text-3xl"
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          {resolvedTheme === "light" && <FiSun />}
          {resolvedTheme === "dark" && <FiMoon />}
        </button>
      </div>
    </nav>
  );
}

function UserCard() {
  const { data } = useSession();
  if (data == null || data.user == null) return <></>;

  return (
    <div className="flex flex-row gap-2 items-center">
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
      <div className="hidden md:block pr-5">
        <p className="font-bold">{data.user.name}</p>
        <p className="text-gray-400 text-sm">{data.user.email}</p>
      </div>
    </div>
  );
}
