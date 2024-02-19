import axios from "axios";

// axios.defaults.baseURL = "https://dummyjson.com/"; // baseURL для всіх екземплярів axios, тому бажано його не використовувати, а використовувати instance

const postInstance = axios.create({
  baseURL: "https://dummyjson.com/",
});

export const fetchPosts = async (params) => {
  try {
    const { data } = await postInstance.get("/posts", {
      // всі пости йдуть не через axios.get, а через instance
      params: {
        ...params,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchPostsByQuery = async (params) => {
  try {
    const { data } = await postInstance.get("/posts/search", {
      params: {
        ...params,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
