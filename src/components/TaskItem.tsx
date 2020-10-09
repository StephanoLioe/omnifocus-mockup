import React from "react";
import Checkbox from "./Checkbox";
import { getTagsFromIds } from "../utils/projectUtils";

import Flag from "./Flag";
import Note from "./Note";
import {
  useProjectState,
  useProjectDispatch,
} from "../context/projectProvider";

interface IProps {
  id: string;
  nestlevel?: number;
}

const TaskItem: React.FC<IProps> = ({ id, nestlevel = 0 }) => {
  const { tags, tasks } = useProjectState();
  const { completed, title, note, tags: tagIds } = tasks[id];

  const dispatch = useProjectDispatch();

  const selected = false;
  const taskTags = getTagsFromIds(tagIds, tags);

  return (
    <>
      <div
        className={`flex w-full pl-20 pr-2 py-2 border-l-4 border-r-4${
          selected ? " bg-blue-100  border-blue-400" : " border-transparent"
        }`}
      >
        <div
          style={{ paddingLeft: nestlevel * 24 }}
          onClick={() => dispatch({ type: "toggle-complete", payload: { id } })}
        >
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
      {/* recursion to render child tasks */}
      {tasks[id].childrenIds.length > 0 &&
        tasks[id].childrenIds.map((childId) => (
          <TaskItem key={childId} id={childId} nestlevel={nestlevel + 1} />
        ))}
    </>
  );
};

export default TaskItem;
