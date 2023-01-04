import clsx from "clsx";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import { RiDashboardFill } from "react-icons/ri";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav
      className={clsx(
        "backdrop-blur-lg sticky top-0 z-10",
        "p-5 md:pl-11 w-full items-center justify-between bg-white/50 dark:bg-black/60",
        "flex flex-row gap-3"
      )}
    >
      <Link
        className="flex flex-row gap-2 items-center cusror-pointer text-2xl"
        href="/"
      >
        <RiDashboardFill />
        <h2 className="font-extrabold">Dashboard</h2>
      </Link>

      <div className="flex flex-row gap-3 items-center">
        <button
          className="text-2xl"
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          {resolvedTheme === "light" && <FiSun />}
          {resolvedTheme === "dark" && <FiMoon />}
        </button>
      </div>
    </nav>
  );
}
