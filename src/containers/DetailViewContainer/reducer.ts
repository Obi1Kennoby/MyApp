import { PUT_PICTURE_DETAILS } from './actions'

export interface PictureDetails {
  id: string
  author?: string
  camera?: string
  cropped_picture: string
  full_picture?: string
}

interface State {
  hiResPictures: PictureDetails[]
  isLoading: false
}

const initialState: State = {
  hiResPictures: [],
  isLoading: false,
}

export default function(state: State = initialState, action) {
  switch (action.type) {
    case PUT_PICTURE_DETAILS:
      if (
        state.hiResPictures.findIndex(pic => pic.id === action.payload.hiResImage.id) > -1
      ) {
        const res1 = {
          isLoading: state.isLoading,
          hiResPictures: state.hiResPictures.map(pic =>
            pic.id === action.payload.hiResImage.id ? action.payload.hiResImage : pic,
          ),
        }
        return res1
      } else {
        return {
          isLoading: state.isLoading,
          hiResPictures: state.hiResPictures.concat(action.payload.hiResImage),
        }
      }
  }
  return state
}
