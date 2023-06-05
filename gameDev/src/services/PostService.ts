import ApiService from './ApiService'
import { HttpError } from '@microsoft/signalr'
import { ErrorType } from './types'

export default class PostService {
  public static async apiRequest<T> (url: string, data: {[k: string]: any}): Promise<T> {
    const formData = new FormData()
    Object.keys(data).forEach(element => {
      formData.append(element, String(data[element]))
    })
    const result = await (await ApiService.ApiClient().post(`${url}`, formData).catch(
      (err: ErrorType) => {
        throw new HttpError(`Ошибка при загрузке url: ${url}`, err?.response ?? 0)
      }))?.data as T
    return result
  }
}
