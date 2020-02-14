// @flow

export const selectHiResImage = (state, imageId: number) =>
  state.detailViewReducer.hiResPictures.find(hiResPic => hiResPic.id === imageId)
