import { axiosInstance } from '../config'

export const getUserListApi = async () => {
  return await axiosInstance.get(`/api/admin/users`)
}
