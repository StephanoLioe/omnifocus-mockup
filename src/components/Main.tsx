import React from "react";
import TaskList from "./TaskList";

export default function Main() {
  return (
    <div className="main flex flex-grow">
      <div className="w-56 bg-gray-800 text-white">list</div>
      <main className="flex-grow px-3 py-6 bg-gray-100">
        <div className="pl-6">
          <h1 className="text-4xl font-black text-blue-500 leading-none">
            Projects
          </h1>
          <div className="text-medium text-gray-600 italic pb-4 mb-2 border-b border-gray-300">
            7 acties, 3 projecten
          </div>
        </div>
        <TaskList />
      </main>
    </div>
  );
}
