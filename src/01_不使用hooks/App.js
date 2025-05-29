import React, { PureComponent } from 'react'


function HelloWorld(props){
  let message='jjjjj'
  // 组件没有重新渲染，因为没有使用hooks，所以组件没有重新渲染
  // 还是将之前的message值返回，所以不会重新渲染
  //没有生命周期函数，没有状态，没有事件处理函数，没有refs
  //没有实例，没有实例变量，没有实例方法
  return (
    <div>HelloWorld {message}
    <button onClick={e=>message==='sss'}>修改文本</button>
    </div>
  )
}
export class App extends PureComponent {
  render() {
    return (
      <div>App
        <HelloWorld />  
      </div>
    )
  }
}

export default App