import * as React from 'react'
import { connect } from 'react-redux'
import { Classes, Intent, Tag } from '@blueprintjs/core'

import { RootState, Dispatch } from '../store'
import { actionCreators as sampleActionCreators, State as sampleState } from '../store/sample'

interface Props {
    error: sampleState['error']
    dispatch: Dispatch
    processing: sampleState['processing']
    uri: sampleState['uri']
}
interface State {
    file: string
}

type InputEvent = React.ChangeEvent<HTMLInputElement>

class UploadPageComponent extends React.Component<Props, State> {
    state: State = {
        file: ''
    }

    onChangeData = ({ target }: InputEvent) => this.setState({ file: target.value })

    onSubmitData = () => this.props.dispatch(sampleActionCreators.sampleAPI({ file: this.state.file! }))

    uploadingMessage() {
        return (
            <div className="spinner-wrapper">
                <div className="spinner"></div>
            </div>
        )
    }

    uriError() {
        const error = this.props.error
        return (
            <div className="sample-message">
                "<Tag className={Classes.MINIMAL} intent={Intent.WARNING}>{error}</Tag>"
            </div>
        )
    }

    uriMessage() {
        return (
            <div className="sample-message">
                <div><a href={this.props.uri}>{this.props.uri}</a>.</div>
            </div>
        )
    }

    render() {
        const section = this.props.processing
            ? this.uploadingMessage()
            : this.props.uri && this.uriMessage() || this.props.error && this.uriError()
        return (
            <div className="upload-page">
                <div>
                    <input className="pt-input" onChange={this.onChangeData} />
                    <button className="pt-button" disabled={this.props.processing} onClick={this.onSubmitData}>
                        submit
                    </button>
                </div>
                {section}
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    error: state.files.error,
    processing: state.files.processing,
    uri: state.files.uri
})

const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const UploadPage = connect(mapStateToProps, mapDispatchToProps)(UploadPageComponent)
