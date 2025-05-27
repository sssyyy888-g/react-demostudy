import React, { PureComponent } from 'react'
import {createPortal} from 'react-dom'
import Model from './Model'
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        {
            createPortal(<h2>hello world</h2>,document.querySelector('#why'))
        }
        <Model>
            <h2>22222</h2>
        </Model>
      </div>
    )
  }
}

export default App