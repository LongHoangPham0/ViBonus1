import { axiosInstance } from "../config";

export const getPostListApi = async (data: any) => {
  return await axiosInstance.get(`/api/posts`, {
    params: data,
  });
};
export const postPostApi = async (data: any) => {
  return await axiosInstance.post(`/api/posts`, data.item);
};
export const postPostIdApi = async (id: number) => {
  return await axiosInstance.get(`/api/posts/${id}`);
};
