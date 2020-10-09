
export function getTagsFromIds<K extends keyof ITag>(
    projectTagsArr: K[],
    tags: ITag
  ): string[] {
    return projectTagsArr.map((k: K): string => tags[k].tagname);
  }
  