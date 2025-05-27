
import React, { Component } from 'react'
import {createRef} from 'react'
import {CSSTransition} from 'react-transition-group'
import './style.css'
export class App extends Component {
  constructor(props){
    super(props)
    this.state={
        isShow:true
    }
      this.nodeRef = createRef(); // 创建ref
  }

  render() {
    const {isShow}=this.state
    return (
      <div>
        <button onClick={()=>this.setState({isShow:!isShow})}>点击切换</button>
       {/* {isShow&& <h2>hhhhhhh</h2>} */}
       {/* in=true/false :控制元素的显示和隐藏 */}
       <CSSTransition in={isShow} unmountOnExit={true} classNames="why" timeout={2000}  nodeRef={this.nodeRef} appear>
        <div>
            <h2 ref={this.nodeRef}>hhhhhh</h2> {/* 绑定ref */}
        </div>
       </CSSTransition>
      </div>
    )
  }
}

export default App