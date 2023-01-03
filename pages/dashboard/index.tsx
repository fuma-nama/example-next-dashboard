import clsx from "clsx";
import Layout from "./_layout";

export default function DashboardPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Your Project</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Getting Started with our powerful tools for web development
        </p>
        <button
          className={clsx(
            "font-bold py-2 px-6 w-fit rounded-xl shadow-lg",
            "bg-blue-500 shadow-blue-300 dark:bg-blue-600 dark:shadow-blue-800 text-white"
          )}
        >
          Learn More
        </button>
      </div>
    </Layout>
  );
}
