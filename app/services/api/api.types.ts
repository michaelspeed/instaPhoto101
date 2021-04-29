import { GeneralApiProblem } from "./api-problem"
import { Image } from "../../models"

export interface User {
  id: number
  name: string
}

export type GetImagesResult = {kind: "ok", images: Image[]} | GeneralApiProblem
