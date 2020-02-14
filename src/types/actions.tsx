// @flow
export interface ActionWithPayload {
  type: string
  payload: Object
}

export interface ActionWithoutPayload {
  type: string
}
