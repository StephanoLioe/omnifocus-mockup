import React from "react";
import TaskItem from "./TaskItem";
import projects from "../data/projects.json";
import tags from "../data/tags.json";
import tasks from "../data/tasks.json";

function getTagsFromIds<K extends keyof ITag>(
  projectTagsArr: K[],
  tags: ITag
): string[] {
  return projectTagsArr.map((k: K): any => tags[k].tagname);
}

function TaskList() {
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
                <span className="inline-block ml-1 w-1 h-1 bg-gray-600 rounded-full"></span>
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
                return (
                  <>
                    <TaskItem key={task.id} taskTags={taskTags} {...task} />
                    {Object.values(tasks)
                      .filter((nestedTask) => nestedTask.parent === task.id)
                      .map((nested) => (
                        <>
                          <TaskItem
                            key={nested.id}
                            taskTags={taskTags}
                            nestlevel="pl-6"
                            selected={true}
                            {...nested}
                          />
                          {Object.values(tasks)
                            .filter(
                              (nested2Task) => nested2Task.parent === nested.id
                            )
                            .map((nested2) => (
                              <>
                                <TaskItem
                                  key={nested2.id}
                                  taskTags={taskTags}
                                  nestlevel="pl-12"
                                  selected={false}
                                  {...nested2}
                                />
                              </>
                            ))}
                        </>
                      ))}
                  </>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
