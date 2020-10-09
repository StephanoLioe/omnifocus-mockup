import React from "react";
import TaskItem from "./TaskItem";
import tasks from "../data/tasks.json";

import { useProjectState } from "../context/projectProvider";

export function getTagsFromIds<K extends keyof ITag>(
  projectTagsArr: K[],
  tags: ITag
): string[] {
  return projectTagsArr.map((k: K): any => tags[k].tagname);
}

const TaskList: React.FC = () => {
  const { projects, tags } = useProjectState();

  return (
    <div className="">
      {Object.values(projects).map((project) => {
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
            {Object.values(tasks)
              .filter(
                (task) => task.projectId === project.id && task.parent === "top"
              )
              .map((task) => {
                const taskTags = getTagsFromIds(task.tags, tags);
                return <TaskItem key={task.id} taskTags={taskTags} {...task} />;
              })}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
