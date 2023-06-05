import ApiService from './ApiService'
import { HttpError } from '@microsoft/signalr'
import { ErrorType } from './types'

export default class LoadService {
  public static async apiRequest<T> (url: string): Promise<T> {
    const result: T = await (await ApiService.ApiClient().get(`${url}`).catch(
      (err: ErrorType) => {
        throw new HttpError(`Ошибка при загрузке url: ${url}`, err?.response ?? 0)
      }))?.data as T
    return result
  }
}
