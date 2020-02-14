import { getPictures } from '../../services/API'

const PICTURES_LIST_SIZE = 10

export const SET_PICTURES = 'SET_PICTURES'
export const ADD_PICTURES = 'ADD_PICTURES'

const setPicturesToStore = (pictures: [], reset: boolean) => ({
  type: reset ? SET_PICTURES : ADD_PICTURES,
  payload: { pictures },
})

export function fetchPictures(reset: boolean) {
  return async (dispatch, getState) => {
    const picturesCount = getState().homeReducer.pictures.length
    const page = reset ? 1 : picturesCount / PICTURES_LIST_SIZE + 1
    if (page > 1 && picturesCount % PICTURES_LIST_SIZE) return

    const response = await getPictures(page)
    const pictures = await response.json()
    dispatch(setPicturesToStore(pictures, reset))
  }
}
