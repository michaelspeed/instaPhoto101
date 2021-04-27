import { GeneralApiProblem } from "./api-problem"
import { Character } from "../../models/character/character"
import { Image } from "../../models"

export interface User {
  id: number
  name: string
}

export type GetImagesResult = {kind: "ok", images: Image[]} | GeneralApiProblem

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem

export type GetCharactersResult = { kind: "ok"; characters: Character[] } | GeneralApiProblem
export type GetCharacterResult = { kind: "ok"; character: Character } | GeneralApiProblem
