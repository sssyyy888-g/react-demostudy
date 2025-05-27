import React, { PureComponent } from 'react'
import { SwitchTransition ,CSSTransition} from 'react-transition-group'
import { createRef } from 'react'
import './style.css'
export class App extends PureComponent {
    constructor(){
        super()
        this.state={
            isLogin:true
        }
        this.nodeRef=createRef()
    }
  render() {
    const {isLogin}=this.state
    return (
      <div>App
       <SwitchTransition mode='out-in'>
         <CSSTransition
         key={isLogin? "exit":'login'}
         classNames='login'
         timeout={1000}
         nodeRef={this.nodeRef}
         >
             <button ref={this.nodeRef} onClick={()=>this.setState({isLogin:!isLogin})}>{isLogin? "退出":'登录'}</button>
         </CSSTransition>
       </SwitchTransition>
      </div>
    )
  }
}

export default App 