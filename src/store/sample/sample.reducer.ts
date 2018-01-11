import { RootActions } from '../actions'
import * as types from './sample.action-types'

export type State = {
    readonly error: string
    readonly file: string
    readonly processing: boolean
    readonly uri: string
}

const initialState: State = {
    error: '',
    file: '',
    processing: false,
    uri: ''
}

export function reducer(state: State = initialState, action: RootActions): State {
    switch (action.type) {
        case types.sampleAPI:
            return { ...initialState, file: action.payload.file, processing: true }
        case types.sampleAPIError:
            return { ...state, error: action.payload.error || '...', processing: false }
        case types.sampleAPISuccess:
            return {
                ...initialState,
                uri:  action.payload.uri
            }
        default:
            return state
    }
}
