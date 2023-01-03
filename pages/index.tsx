import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/Home.module.css";
import clsx from "clsx";
import { Inter } from "@next/font/google";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { status } = useSession();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={clsx(inter.className, styles.main, "bg-white dark:bg-black")}
      >
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <button
              className="text-2xl"
              onClick={() =>
                setTheme(resolvedTheme === "light" ? "dark" : "light")
              }
            >
              <FiMoon className="hidden dark:block" />
              <FiSun className="dark:hidden" />
            </button>
          </div>
        </div>

        <div className={styles.center}>
          {status === "unauthenticated" && (
            <button
              className={clsx(
                "bg-blue-300 text-white rounded-xl p-4 font-bold",
                "dark:bg-blue-600 dark:text-white"
              )}
              onClick={() => signIn()}
            >
              Sign in
            </button>
          )}
          {status === "authenticated" && (
            <button
              className={clsx(
                "bg-red-300 text-white rounded-xl p-4 font-bold",
                "dark:bg-red-600 dark:text-white"
              )}
              onClick={() => signOut()}
            >
              Logout
            </button>
          )}
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
