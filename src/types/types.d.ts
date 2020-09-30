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

interface IProject {
  [key: string]: ITaskVal;
}
