import { Observable } from 'rxjs/Observable'

import { baseURI } from '../config'

export interface SamplePayload {
    file: string
}

export interface SampleResponse {
    uri: string
}

export function getSampleData({ file }: SamplePayload): Observable<SampleResponse> {
    const url = `${baseURI}/api/upload`
    const body = JSON.stringify({ file })
    return Observable.ajax({ body, crossDomain: true, method: 'post', url })
        .map(({ response }) => response.data as SampleResponse)
        .map(data => ({ ...data, uri: `${baseURI}/files/${data.uri}` }))
        .catch(data => {
            const error = data.response && data.response.error || data.message
            return Observable.throw(new Error(error))
        })
}