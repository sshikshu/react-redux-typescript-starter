import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import '@blueprintjs/core/dist/blueprint.css'

import './polyfills.ts'
import './index.css'
import App from './App'
import { store } from './store'

const root = document.getElementById('root') as HTMLElement

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, root)
