import { combineReducers } from 'redux'

import { Reducers, State } from './reducer'

export interface AppState {
  user: State
}

export const rootReducer = combineReducers<AppState>({
  user: Reducers,
})
