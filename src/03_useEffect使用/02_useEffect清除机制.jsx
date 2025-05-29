import React, { memo ,useEffect} from 'react'

const App = memo(() => {
    useEffect(()=>{
        //有一个返回值
        //这个回调函数当组件被销毁的时候执行
        return ()=>{
            
        }
    })
  return (
    <div>App</div>
  )
})

export default App