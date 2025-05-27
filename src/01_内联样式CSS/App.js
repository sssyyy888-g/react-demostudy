import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      backgroundColor:'orange'
    }
  }
  changeColor(){
    this.setState({
      backgroundColor:'pink'
    })
  }
  render() {
    const {backgroundColor} = this.state
    return (
      <div>
        <div style={{color:'red' ,fontSize:'25px',backgroundColor:backgroundColor}}>App</div>
        <button onClick={e=>this.changeColor()}>点击更换背景颜色</button>
      </div>
      
    )
  }
}

export default App