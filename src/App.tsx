import * as React from 'react'

import { UploadPage } from './+app/UploadPage'

class App extends React.Component {
  render() {
    return (
      <div className="sample-app">
        <header>
          <h3>fileshar.oo</h3>
        </header>
        <section>
          <UploadPage />
        </section>
        <footer>
          mail me <a href="mailto:nullorm@gmail.com">nullorm@gmail.com</a>
        </footer>
      </div>
    )
  }
}

export default App
