import Card from "@components/Card";
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
            "font-bold py-2 px-5 w-fit rounded-xl",
            "bg-blue-300/50 text-blue-500 dark:bg-blue-700/30 dark:text-blue-500"
          )}
        >
          Learn More <span className="ml-2">{`->`}</span>
        </button>
      </div>
      <div className="grid grid-cols-3 mt-10 gap-5">
        <Card
          title="Discord Bot Dashboard"
          description="Next-gen discord bot Dashboard built with Chakra UI & React.js"
        />
        <Card
          title="Next.js Full-Stack Admin Dashboard"
          description="Fast performance Dashboard with Full-stack Backend with Typescript"
        />
        <Card
          title="Powerful Chat App"
          description="Modern chat app that runs on Web, based on popular UI frameworks"
        />
      </div>
    </Layout>
  );
}
