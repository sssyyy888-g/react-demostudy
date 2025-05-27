import React, { PureComponent } from 'react'
import HomeStyle from './Home.module.css'
export class Home extends PureComponent {
  render() {
    return (
      <div className={HomeStyle.title}>Home</div>
    )
  }
}

export default Home