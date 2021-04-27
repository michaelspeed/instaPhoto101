import { ImagesModel } from "./images"

test("can be created", () => {
  const instance = ImagesModel.create({})

  expect(instance).toBeTruthy()
})
