// @flow
import {SET_PICTURES} from "./actions";

const initialState = {
  pictures: [],
  isLoading: true,
  page: 1,
  errorMessage: '',
};

export default function(state: any = initialState, action: any) {
  switch (action.type) {
    case SET_PICTURES:
      return action.payload.pictures
    default:
      return state
  }
}
