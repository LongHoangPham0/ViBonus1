import { axiosInstance } from '../config'

export const getUserIDListApi = async () => {
  return await axiosInstance.get(`/api/admin/users/7`)
  // return await axiosInstance.get(`/api/admin/users/${userId}`)

}

export default getUserIDListApi
