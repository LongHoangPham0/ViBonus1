import { axiosInstance } from '../config'

export const getTagListApi = async () => {
  return await axiosInstance.get(`/api/tags`)
}
