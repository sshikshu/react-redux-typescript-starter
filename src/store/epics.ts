import { combineEpics } from 'redux-observable'

import { epics as sampleEpics } from './sample'

export const rootEpic = combineEpics(sampleEpics)
