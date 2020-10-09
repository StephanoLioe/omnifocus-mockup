import React from "react";
import TaskItem from "./TaskItem";
import { getProjectsFromIds, getTagsFromIds } from "../utils/projectUtils";
import { useProjectState } from "../context/projectProvider";

const TaskList: React.FC = () => {
  const { projects, tags, projectOrder, tasks } = useProjectState();

  const data = getProjectsFromIds(projectOrder, projects, tasks);

  return (
    <div className="">
      {data.map((project) => {
        return (
          <div key={project.id}>
            <div className="pl-20">
              <h2 className="text-lg font-bold leading-none">
                {project.title}
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
            {project.tasks.map((task: ITaskJsonVal) => {
              const taskTags = getTagsFromIds(task.tags, tags);
              return (
                <TaskItem
                  key={task.id}
                  taskTags={taskTags}
                  tasks={tasks}
                  {...task}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
