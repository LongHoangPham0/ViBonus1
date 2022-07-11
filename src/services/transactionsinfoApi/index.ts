import { axiosInstance } from '../config'

export const getTransactionsinfoApi = async () => {
  return await axiosInstance.get(`/api/transactions/info`)
}
