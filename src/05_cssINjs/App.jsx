import React, { PureComponent } from 'react'
import { AppWarpper } from './style' 
import Home from './home/index'
export class App extends PureComponent {
    constructor(){
        super()
        this.state={
            size:30,
            color:''
        }
    }
  render() {
    const {size,color}=this.state
    return (
      <AppWarpper size={size} color={color}>
        <div className='app'>
        <div className='section' >
            <h2 className='title'>我是标题</h2>
            <p className='content'>我是内容</p>
            <button onClick={e=>this.setState({color:'pink'})}>修改颜色</button>
        </div>

        <div className="footer">
            <p>我是底部</p>

        </div>
      </div>
       <Home/>
      </AppWarpper>
     
    )
  }
}

export default App