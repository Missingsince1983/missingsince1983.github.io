import Axios, { AxiosInstance } from 'axios'
Axios.defaults.headers.common.withCredentials = true //eslint-disable-line
Axios.defaults.withCredentials = true

export default class ApiService {
  public static ApiDomain = ''
  public static FrontendDomain = ''

  public static ApiClient = (): AxiosInstance => {
    const apiClient = Axios.create({
      baseURL: ApiService.ApiDomain,
      withCredentials: false
    })
    return apiClient
  }
}
