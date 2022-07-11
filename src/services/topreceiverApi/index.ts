import { axiosInstance } from '../config'

export const getTopReceiverApi = async () => {
  return await axiosInstance.get(`/api/leaderboard/top-receiver`)
}
