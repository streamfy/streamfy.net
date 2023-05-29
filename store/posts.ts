// import { myTs } from "@traderfour/api-ts";
export const usePostsStore = () => {
  // const myFunctions = myTs();
  // myFunctions.config.baseURL = baseURL + "v1";

  // myFunctions.categories.posts().then((res) => {
  //   console.log(res);
  // });

  const createPost = async (payload: any) => {
    const { data } = await useApi("/v1/my/posts", {
      method: "post",
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
      body: JSON.stringify(payload),
    });
    console.log(data);
  };

  return { createPost };
};
