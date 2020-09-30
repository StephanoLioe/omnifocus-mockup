interface ITagVal {
  id: string;
  tagname: string;
}

interface ITag {
  [key: string]: ITagVal;
}

interface ITaskVal {
  id: string;
  title: string;
  taskTags: string[];
  note: string;
  flag: boolean;
  completed: boolean;
  parent: string;
}

interface ITaskJsonVal {
  id: string;
  projectId: string;
  title: string;
  completed: boolean;
  tags: string[];
  note: string;
  flag: boolean;
  parent: string;
}

interface ITask {
  [key: string]: ITaskVal;
}

interface IProjectVal {
  id: string;
  title: string;
  exdate: string;
  tags: string[];
}
