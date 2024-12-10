import api from "./api";

export const index = async () => {
  try {
    const response = await api.get("/posts"); 
    return response.data;  
  } catch (error) {
    console.error("Data failed:", error);
    throw error;  
  }
};

export const CreatePost = async (title , content) => {
  try {
    const response = await api.post("/posts",
    {
      title,
      content
    }); 
    return response.data;  
  } catch (error) {
    console.error("error:", error);
    throw error;  
  }
};

export const getPostById = async (id) => {
  try {
    const response = await api.get("/post/"+id); 
    console.log(response);
    return response.data;  
  } catch (error) {
    console.error("Data failed:", error);
    throw error;  
  }
};

export const EditPost = async (id, data) => {
  try {
    const response = await api.put(`/posts/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("error:", error);
    throw error;  
  }
};

export const DeletePost = async (id) => {
  try {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
      console.error("error:", error);
      throw error;  
  }
};
