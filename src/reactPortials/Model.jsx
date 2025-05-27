import React, { PureComponent } from 'react'
import {createPortal} from'react-dom'
export class Model extends PureComponent {
  render() {
    return (
      <div>
        {
            createPortal(this.props.children,document.querySelector('#model'))
        }
      </div>
    )
  }
}

export default Model