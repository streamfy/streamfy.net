export const useProjectStore = () => {
  const getProjects = async (page?: number) => {
    const { data } = await useApi(`/my/projects${page ? "?page" + page : ""}`, {
      method: "get",
      //@ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
    });
    console.log(data);
    return data;
  };

  return { getProjects };
};
