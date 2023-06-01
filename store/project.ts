// import { myTs } from "@streamfy/my-ts";
// export const useProjectStore = () => {
//   const myFunctions = myTs();

//   const getProjects = (payload: any) => {
//     // @ts-ignore
//     myFunctions.config.token = useCookie("user").value.access_token;
//     return myFunctions.projects.list();
//   };

//   return { getProjects, myFunctions };
// };

export const useProjectStore = () => {
  const getProjects = async () => {
    const { data } = await useApi("/v1/my/projects", {
      method: "get",
      //@ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
    });
    console.log(data);
  };

  return { getProjects };
};
