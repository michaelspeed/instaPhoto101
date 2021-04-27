import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ImageModel = types
  .model("Image")
  .props({
    id: types.number,
    pageURL: types.string,
    type: types.string,
    tags: types.string,
    previewURL: types.string,
    previewWidth: types.number,
    previewHeight: types.number,
    largeImageURL: types.string,
    imageWidth: types.number,
    imageHeight: types.number,
    imageSize: types.number,
    views: types.number,
    downloads: types.number,
    user_id: types.number,
    user: types.string,
    userImageURL: types.string,
    comments: types.number,
    favorites: types.number,
    likes: types.number,
    webformatHeight: types.number,
    webformatURL: types.string,
    webformatWidth: types.number,
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type ImageType = Instance<typeof ImageModel>

export interface Image extends ImageType {
}

type ImageSnapshotType = SnapshotOut<typeof ImageModel>

export interface ImageSnapshot extends ImageSnapshotType {
}

export const createImageDefaultModel = () => types.optional(ImageModel, {})
