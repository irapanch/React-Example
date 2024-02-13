import axios from "axios";
export const fetchPosts = async (params) => {
  try {
    const { data } = await axios.get("https://dummyjson.com/posts", {
      params: {
        ...params,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
