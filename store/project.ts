import { myTs } from "@streamfy/my-ts";
export const useProjectStore = () => {
  const myFunctions = myTs();

  const getProjects = async () => {
    return await myFunctions.projects.list();
  };

  return { getProjects };
};
