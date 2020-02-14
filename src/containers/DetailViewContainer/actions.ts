// @flow

import {getPictureDetails} from '../../services/API';
import {FETCH_FAILED} from '../HomeContainer/actions';
import {ActionWithPayload, ActionWithoutPayload} from '../../types/actions';

export const PICTURE_DETAILS_FETCH_REQUESTED =
  'PICTURE_DETAILS_FETCH_REQUESTED';
export const PICTURE_DETAILS_FETCH_SUCCESS = 'PICTURE_DETAILS_FETCH_SUCCESS';

export function pictureIsLoading(): ActionWithoutPayload {
  return {
    type: PICTURE_DETAILS_FETCH_REQUESTED,
  };
}

export function fetchPictureSuccess(
  imageId: number,
  hiResImage: string,
): ActionWithPayload {
  return {
    // TODO: implement me
  };
}

export function fetchPictureFailed(errorMessage: string): ActionWithPayload {
  return {
    // TODO: implement me
  };
}


export const SET_PICTURE_DETAILS = 'SET_PICTURE_DETAILS'

const setPictureDetailsToStore = (pictureDetails) => ({
  type: SET_PICTURE_DETAILS,
  payload: { pictureDetails }
})

export function fetchPictureDetails(imageId: number) {
  return async dispatch => {
    // const response = await getPictureDetails(imageId);
    // const pictureDetails = await response.json();
    // dispatch(setPictureDetailsToStore(pictureDetails))
  };
}
