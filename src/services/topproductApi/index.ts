import { axiosInstance } from '../config'

export const getTopProductApi = async () => {
  return await axiosInstance.get(`/api/rewards/top-products`)
}
