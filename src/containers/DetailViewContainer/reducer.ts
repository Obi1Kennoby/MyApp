import {PUT_PICTURE_DETAILS} from "./actions";

export interface PictureDetails {
  id: string
  author: string
  camera: string
  cropped_picture: string
  full_picture: string
}

interface State {
  hiResPictures: PictureDetails[]
  isLoading: false
}

const initialState: State = {
  hiResPictures: [],
  isLoading: false,
};

export default function(state: State = initialState, action) {
  // switch (action.type) {
  //   case PUT_PICTURE_DETAILS:
  //     if (state.hiResPictures.findIndex(pic => pic.id === action.payload.hiResImage.id) > -1) {
  //       return { isLoading: state.isLoading, ...state.hiResPictures.map(pic => pic.id === action.payload.event.id ? action.payload.event : pic) }
  //     } else {
  //       return {
  //         isLoading: state.isLoading,
  //         ...state.hiResPictures.concat(action.payload.hiResImage),
  //       };
  //     }
  // }
  return state;
}
