import {getPictures} from '../../services/API';
import {ActionWithPayload, ActionWithoutPayload} from '../../types/actions';

// export const PICTURES_FETCH_REQUESTED = 'PICTURES_FETCH_REQUESTED';
// export const PICTURES_FETCH_SUCCESS = 'PICTURES_FETCH_SUCCESS';
// export const FETCH_FAILED = 'FETCH_FAILED';
//
// export function listIsLoading(): ActionWithoutPayload {
//   return {
//     type: PICTURES_FETCH_REQUESTED,
//   };
// }

// export function fetchListSuccess(
//   pictures: Object[],
//   page: number,
// ): ActionWithPayload {
//   return {
//     // TODO: implement me
//   };
// }
//
// export function fetchListFailed(errorMessage: string): ActionWithPayload {
//   return {
//     // TODO: implement me
//   };
// }

const PICTURES_LIST_SIZE = 10;

export const SET_PICTURES = 'SET_PICTURES'
export const ADD_PICTURES = 'ADD_PICTURES'

const setPicturesToStore = (pictures: [], reset: boolean) => ({
  type: reset ? SET_PICTURES : ADD_PICTURES,
  payload: { pictures }
})

export function fetchPictures(reset: boolean) {
  return async (dispatch, getState) => {
    const picturesCount = getState().homeReducer.pictures.length;
    const page = reset ? 1 : picturesCount / PICTURES_LIST_SIZE + 1;
    if (page > 1 && picturesCount % PICTURES_LIST_SIZE) return;

    const response = await getPictures(page);
    const pictures = await response.json();
    dispatch(setPicturesToStore(pictures, reset));
  };
}
