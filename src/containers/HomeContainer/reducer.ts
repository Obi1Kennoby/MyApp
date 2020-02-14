// @flow
import {ADD_PICTURES, SET_PICTURES} from "./actions";

const initialState = {
  pictures: [],
  isLoading: true,
  page: 1,
  errorMessage: '',
};

export default function(state: any = initialState, action) {
  switch (action.type) {
    case SET_PICTURES:
      return action.payload.pictures;
    case ADD_PICTURES:
      const res = {
        ...state,
        pictures: state.pictures.concat(action.payload.pictures.pictures),
      };
      return res
    default:
      return state
  }
}
