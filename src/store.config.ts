import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './redux/store'

export function configureStore() {

  const store = createStore(
    rootReducer,
    compose(applyMiddleware())
  )

  return store
}