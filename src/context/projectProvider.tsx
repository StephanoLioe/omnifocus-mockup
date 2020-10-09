import React, { createContext, useContext, useReducer } from "react";

import tags from "../data/tags.json";
import tasks from "../data/tasks.json";
import projectOrder from "../data/projectorder.json";

type Action =
  | { type: "toggle-complete"; payload: { id: string } }
  | { type: "toggle-flag" };
export type Dispatch = (action: Action) => void;
type State = {
  tasks: Record<string, ITaskJsonVal>;
  tags: Record<string, ITagVal>;
  projectOrder: string[];
};

const ProjectStateContext = createContext<State | undefined>(undefined);
const ProjectDispatchContext = createContext<Dispatch | undefined>(undefined);

function projectReducer(state: State, action: Action) {
  switch (action.type) {
    case "toggle-complete":
      console.log("toggle-complete called", action.payload);

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: {
            ...state.tasks[action.payload.id],
            completed: !state.tasks[action.payload.id].completed,
          },
        },
      };
    case "toggle-flag":
      console.log("toggle-flag called", state);
      return { ...state };
    default:
      throw new Error(`Unhandled action dispatced type: ${action["type"]}`);
  }
}

const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(projectReducer, {
    tasks: tasks,
    tags: tags,
    projectOrder: projectOrder,
  });
  return (
    <ProjectStateContext.Provider value={state}>
      <ProjectDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectDispatchContext.Provider>
    </ProjectStateContext.Provider>
  );
};

function useProjectState() {
  const context = useContext(ProjectStateContext);
  if (context === undefined) {
    throw new Error("usProjectState must be inside the ProjectsProvider");
  }
  return context;
}

function useProjectDispatch() {
  const context = useContext(ProjectDispatchContext);
  if (context === undefined) {
    throw new Error("useProjectDispatch mus be used within a ProjectsProvider");
  }
  return context;
}

export { useProjectState, useProjectDispatch };
export default ProjectProvider;
