import { Reducer } from 'redux'
import { ActionsObjectTypes } from './actions'
import { ActionTypes } from './types'

export const initialState = {
  user: {
    name: 'Matthew',
    birthday: '02/01/1967',
    description: 'Matthew est un musicien.',
  }
}
export type State = typeof initialState

export const Reducers: Reducer<State, ActionsObjectTypes> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE: {
      return {
        ...state,
        user: action.payload.user
      }
    }
    default:
      return state
  }
}