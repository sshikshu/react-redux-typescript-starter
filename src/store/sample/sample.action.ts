import * as types from './sample.action-types'
import { SampleResponse } from '../../api/sample.api'

export type Payloads = {
    sampleAPI: { file: string }
    sampleAPIError: { error: string }
    sampleAPISuccess: SampleResponse
}

export type Actions = {
    [P in keyof Payloads]: { payload: Payloads[P], type: P }
}

export type AC<P extends keyof Payloads> = {
    (payload: Payloads[P]): Actions[P]
}

export type ActionCreators = {
    [P in keyof Payloads]: AC<P>
}

export const actionCreators: ActionCreators = {
    sampleAPI: payload => ({ payload, type: types.sampleAPI }),
    sampleAPIError: payload => ({ payload, type: types.sampleAPIError }),
    sampleAPISuccess: payload => ({ payload, type: types.sampleAPISuccess })
}
