import { axiosInstance } from '../config'

export const postLoginApi = async () => {
    return await axiosInstance.post(`api/keycloak/login`)
}