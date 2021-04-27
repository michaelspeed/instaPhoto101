import { Api } from "./api"
import { ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import * as env from '../../config/env'

export class PixabayApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async getImages(page: number) {
    const envKey = env.API_KEY
    const url = env.URL
    console.log(env)
    try {
      const response: ApiResponse<any> = await this.api.apisauce.get(
        url,
        {key: envKey, page}
      )
      console.log(response)
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
      const images = response.data.hits
      return {kind: "ok", images}
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
