import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ImageModel } from "../image/image"

/**
 * Model description here for TypeScript hints.
 */
export const ImagesModel = types
  .model("Images")
  .props({
    images: types.optional(types.array(ImageModel), []),
    page: types.optional(types.number, 1)
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({

  })) // eslint-disable-line @typescript-eslint/no-unused-vars

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
