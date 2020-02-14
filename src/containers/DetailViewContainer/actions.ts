import { getPictureDetails } from '../../services/API'
export const PUT_PICTURE_DETAILS = 'SET_PICTURE_DETAILS'

const putPictureDetailsToStore = hiResImage => ({
  type: PUT_PICTURE_DETAILS,
  payload: { hiResImage },
})

export function fetchPictureDetails(imageId: number) {
  return async dispatch => {
    const response = await getPictureDetails(imageId)
    const pictureDetails = await response.json()
    dispatch(putPictureDetailsToStore(pictureDetails))
  }
}
