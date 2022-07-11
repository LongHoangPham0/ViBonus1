import { axiosInstance } from '../config'

export const getRewardListApi = async () => {
  return await axiosInstance.get(`/api/rewards`)
}
export const putRewardListApi = async (data: any) => {
  return await axiosInstance.post(`/api/rewards/redeem`, data)
}