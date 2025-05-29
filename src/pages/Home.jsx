import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className="home-nav">
          <Link to='/home/recommend'>推荐</Link>
          <Link to='/home/ranking'>排行榜</Link>
        </div>
      {/* 站位组件 */}
      <Outlet/>
      </div>
    )
  }
}

export default Home