import { axiosInstance } from '../config'

export const getPostCategoryListApi = async () => {
  return await axiosInstance.get(`/api/post-categories`)
}
