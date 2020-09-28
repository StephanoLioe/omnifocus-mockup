import React from "react";
import Checkbox from "./Checkbox";

import Flag from "./Flag";
import Note from "./Note";

interface IProps extends IProjectVal {
  selected?: boolean;
  nestlevel?: string;
}

function TaskItem({
  id,
  title,
  note,
  completed,
  taskTags = [],
  flag,
  selected = false,
  nestlevel,
}: IProps) {
  return (
    <div
      className={`flex w-full pl-20 pr-2 py-2 border-l-4 border-r-4${
        selected ? " bg-blue-100  border-blue-400" : " border-transparent"
      }`}
    >
      <div className={nestlevel}>
        <Checkbox completed={completed} />
      </div>
      <div className="flex flex-col pl-2 flex-grow">
        <div className="flex justify-between">
          <div className="task-title text-sm font-medium leading-none">
            {title}
          </div>
          <div className="content-right flex justify-between h-3  text-xs mt-1 leading-none">
            <div className="w-32">
              {taskTags.length > 0 && (
                <span
                  key={taskTags[0]}
                  className="tags text-gray-700 px-2 rounded-full font-semibold bg-gray-300"
                >
                  {taskTags[0]}
                </span>
              )}
              <span
                key={"dots-tag"}
                className="tags text-gray-700 px-2 ml-1 rounded-full font-semibold bg-gray-300"
              >
                ...
              </span>
            </div>
            <div className="flex justify-end w-40">
              <span className="date-warnings text-red-900 font-semibold bg-red-300 rounded px-1 mr-2">
                23-07-2020
              </span>
              <Note
                active={true}
                className="w-4 mr-2"
                onClick={() => console.log("click note")}
              />
              <Flag
                active={true}
                className="w-4"
                onClick={() => console.log("click flag")}
              />
            </div>
          </div>
        </div>

        <div className="note text-xs text-gray-700">{note}</div>
      </div>
    </div>
  );
}

export default TaskItem;