import React, { PureComponent } from 'react'
import { HomeWrapper } from './style'
export class Home extends PureComponent {
  render() {
    return (
     <HomeWrapper>
         <div className='top'>
            <div className="banner"></div>
         </div>
         <div className='bottom'>
            <h2 className="header"></h2>
            <ul>
                <li>商品展示1</li>
                <li>商品展示2</li>
                <li>商品展示3</li>
            </ul>
         </div>
     </HomeWrapper>
    )
  }
}

export default Home