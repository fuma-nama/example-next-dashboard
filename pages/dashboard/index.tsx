import Card from "@components/Card";
import { RiAddFill, RiAddLine } from "react-icons/ri";
import Layout from "./_layout";

export default function DashboardPage() {
  return (
    <Layout className="z-[2]">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Your Project</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Getting Started with our powerful tools for web development
        </p>
        <div className="flex flex-row gap-3 flex-wrap">
          <button className="button-primary py-4 flex flex-row justify-center items-center w-full sm:w-fit">
            <RiAddLine className="inline mr-1 text-2xl" /> Create Project
          </button>
          <button className="button-flat py-4 w-full sm:w-fit">
            Learn More
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-10 gap-5">
        <Card
          title="Discord Bot Dashboard"
          description="Next-gen discord bot Dashboard built with Chakra UI & React.js"
        />
        <Card
          title="Full-Stack Admin Dashboard"
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
