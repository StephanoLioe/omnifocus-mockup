interface ITagVal {
  id: string;
  tagname: string;
}

interface ITag {
  [key: string]: ITagVal;
}

interface IProjectVal {
  id: string;
  title: string;
  taskTags: string[];
  note: string;
  flag: boolean;
  completed: boolean;
}

interface IProject {
  [key: string]: IProjectVal;
}
