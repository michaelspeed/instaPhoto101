import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ImageModel } from "../image/image"
import { PixabayApi } from "../../services/api/pixabay-api"
import { withEnvironment } from "../extensions/with-environment"

/**
 * Model description here for TypeScript hints.
 */
export const ImagesModel = types
  .model("Images")
  .props({
    images: types.optional(types.array(ImageModel), []),
    page: types.optional(types.number, 1)
  })
  .extend(withEnvironment)
  .actions(self => ({
    addImageData(images) {
      self.images.push(...images)
    }
  }))
  .actions((self) => ({
    getInitialImageData: async () => {
      const pixabayApi = new PixabayApi(self.environment.api)
      const result = await pixabayApi.getImages(1)
      if (result.kind === "ok") {
        self.addImageData(result.images)
      }
    },
    afterAttach() {
      if (self.images.length === 0) {
        this.getInitialImageData()
      }
    },
    beforeDestroy() {
      self.addImageData([])
    }
  }))// eslint-disable-line @typescript-eslint/no-unused-vars

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type ImagesType = Instance<typeof ImagesModel>
export interface Images extends ImagesType {}
type ImagesSnapshotType = SnapshotOut<typeof ImagesModel>
export interface ImagesSnapshot extends ImagesSnapshotType {}
export const createImagesDefaultModel = () => types.optional(ImagesModel, {})
