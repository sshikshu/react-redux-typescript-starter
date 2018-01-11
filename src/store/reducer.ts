import { combineReducers } from 'redux'

import { reducer as files, State as SampleState } from './sample/sample.reducer'

export interface RootState {
    files: SampleState
}

export const rootReducer = combineReducers<RootState>({ files })
