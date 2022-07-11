import { axiosInstance } from '../config'

export const getTransactionsApi = async () => {
  return await axiosInstance.get(`/api/transactions`)
}
