import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { loadState, saveState } from './localStorage.js'
import { RootReducer } from '../redux/reducers/index.js'

export const configureStore = () => {
  let persistedState = loadState()
  let store = createStore(
    RootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
  )
  store.subscribe(() => {
    saveState({
      articles: store.getState().articles
    })
  })
  return store
}
