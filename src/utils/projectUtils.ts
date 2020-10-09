
export function getTagsFromIds<K extends keyof ITag>(
    projectTagsArr: K[],
    tags: ITag
  ): string[] {
    return projectTagsArr.map((k: K): string => tags[k].tagname);
  }
  
  function getTasksFromIds<K extends keyof ITask>(taskIds: K[], tasks: ITask) {
    return taskIds.map((k: K): any => ({
      ...tasks[k],
      children: getTasksFromIds(tasks[k].orderdChildren, tasks),
      test: tasks[k].orderdChildren,
    }));
  }
  
  export function getProjectsFromIds<K extends keyof IProject>(
    projectIds: K[],
    projects: IProject,
    tasks: ITask
  ) {
    return projectIds.map((k: K): any => {
      return {
        ...projects[k],
        tasks: getTasksFromIds(projects[k].tasksOrder, tasks),
      };
    });
  }