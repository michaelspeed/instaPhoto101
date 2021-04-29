import { cast, Instance, SnapshotOut, types } from "mobx-state-tree"
import { ImageModel } from "../image/image"
import { PixabayApi } from "../../services/api/pixabay-api"
import { withEnvironment } from "../extensions/with-environment"

export const ImagesModel = types
  .model("Images")
  .props({
    initLoading: types.optional(types.boolean, true),
    progressLoading: types.optional(types.boolean, false),
    images: types.optional(types.array(ImageModel), []),
    page: types.optional(types.number, 1),
    error: types.optional(types.string, ''),
    search: types.optional(types.string, "")
  })
  .extend(withEnvironment)
  .actions(self => ({
    addImageData(images) {
      if (images.length === 0) {
        self.images = cast([])
        self.page = 1
        self.error = ""
        self.initLoading = true
        self.progressLoading = false
        self.search = ""
        return
      }
      self.images.push(...images)
    },
    addPage() {
      self.page = self.page + 1
    },
    triggerInitialLoading(trigger?) {
      if (trigger) {
        self.initLoading = trigger
        return
      }
      self.initLoading = !self.initLoading
    },
    triggerProgressLoading(trigger?) {
      if (trigger) {
        self.progressLoading = trigger
        return
      }
      self.progressLoading = !self.progressLoading
    },
    setErrorTrigger(trigger?) {
      if(trigger){
        self.error = trigger
        return
      }
      self.error = ''
    },
  }))
  .actions((self) => ({
    getInitialImageData: async () => {
      const pixabayApi = new PixabayApi(self.environment.api)
      const result = await pixabayApi.getImages(1, self.search)
      if (result.kind === "ok") {
        self.addImageData(result.images)
        if (self.initLoading) {
          self.triggerInitialLoading(false)
        }
      } else {
        self.setErrorTrigger(result.kind)
      }
    },
    setSearchTrigger(query: string) {
      if (self.images.length > 0) {
        self.images = cast([])
        self.error = ""
        self.page = 1
        self.initLoading = true
        self.progressLoading = false
      }
      self.search = query
      this.getInitialImageData();
    },
    resetSearch() {
      self.images = cast([])
      self.page = 1
      self.error = ""
      self.initLoading = true
      self.progressLoading = false
      self.search = ""
      this.getInitialImageData()
    },
    getNextPageData: async () => {
      self.triggerProgressLoading(true)
      const pixabayApi = new PixabayApi(self.environment.api)
      const result = await pixabayApi.getImages(self.page + 1, self.search)
      console.log(result)
      if (result.kind === "ok") {
        self.addImageData(result.images)
        self.addPage()
        self.triggerProgressLoading(false)
      } else {
        self.setErrorTrigger(result.kind)
      }
    },
    afterAttach() {
      if (self.images.length === 0) {
        this.getInitialImageData()
      } else {
        self.addImageData([])
        this.getInitialImageData()
      }
    },
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
