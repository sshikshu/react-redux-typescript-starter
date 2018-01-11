import * as React from 'react'
import { combineEpics, Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { Intent } from '@blueprintjs/core'

import * as types from './sample.action-types'
import { Actions as FileActions, actionCreators } from './sample.action'
import { RootActions } from '../actions'
import { RootState } from '../reducer'
import * as sampleAPI from '../../api/sample.api'
import { toasterMain } from '../../common'

const uploadFile: Epic<RootActions, RootState> = (action$, store) =>
    action$.ofType(types.sampleAPI)
        .map((action: FileActions[typeof types.sampleAPI]) => action.payload)
        .switchMap(payload => sampleAPI.getSampleData(payload)
            .do(({ uri }) => toasterMain.show({ message: <a href={uri}>{uri}</a> }))
            .map(actionCreators.sampleAPISuccess)
            .catch(error => Observable.of(actionCreators.sampleAPIError({ error: error.message }))
                .do(() => toasterMain.show({ intent: Intent.WARNING, message: error.message }))))

export const epics = combineEpics(uploadFile)
