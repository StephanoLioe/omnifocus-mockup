import React from "react";
import TaskItem from "./TaskItem";
import { useProjectState } from "../context/projectProvider";

const TaskList: React.FC = () => {
  const { tasks, projectOrder } = useProjectState();

  return (
    <div className="">
      {projectOrder.map((id: string) => {
        return (
          <div key={id}>
            <div className="pl-20">
              <h2 className="text-lg font-bold leading-none">
                {tasks[id].title}
              </h2>
              <div className="pb-2 leading-none border-b">
                <span className="task-info text-xs text-gray-600 font-semibold">
                  4 resterernd
                </span>
                <span className="inline-block ml-1 w-1 h-1 bg-gray-600 rounded-full" />
                <span className="task-info text-xs text-red-900 pt-0 font-semibold bg-red-300 rounded ml-1 px-1">
                  4 achterstallig
                </span>
              </div>
            </div>
            {tasks[id].childrenIds.map((taskId: string) => {
              return <TaskItem key={taskId} id={taskId} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
