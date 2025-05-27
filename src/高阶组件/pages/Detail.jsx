import React, { PureComponent } from 'react'

import logRenderTime from '../hoc/log_renderTime'
export class Detail extends PureComponent {
   
  render() {
    return (
      <div>
        <h2>detail</h2>
        <ul>
            <li>数据列表1</li>
            <li>数据列表2</li>

        </ul>
      </div>
    )
  }
}

export default logRenderTime(Detail)