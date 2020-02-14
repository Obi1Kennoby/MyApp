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

export const SET_PICTURES = 'SET_PICTURES'
export const ADD_PICTURES = 'ADD_PICTURES'

const setPicturesToStore = (pictures: [], reset: boolean) => ({
  type: reset ? SET_PICTURES : ADD_PICTURES,
  payload: { pictures }
})

export function fetchPictures(page: number = 1) {
  return async dispatch => {
    const response = await getPictures(page);
    const pictures = await response.json();
    dispatch(setPicturesToStore(pictures, true))
  };
}
