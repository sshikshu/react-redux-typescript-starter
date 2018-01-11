import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { RootActions } from './actions'
import { rootEpic } from './epics'
import { rootReducer, RootState } from './reducer'

export interface Dispatch {
    (action: RootActions): void
}

export { RootState }

const devtoolsCompose = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'
const composeEnhancers = (process.env.NODE_ENV === 'development' && window[devtoolsCompose]) || compose

function configureStore(initialState?: RootState) {
    const middlewares = [createEpicMiddleware(rootEpic)]
    const enhancer = composeEnhancers(applyMiddleware(...middlewares))
    return createStore(rootReducer, initialState!, enhancer)
}

export const store = configureStore()
