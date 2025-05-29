import React, { memo } from 'react'
import { useState ,useEffect} from "react";
const App = memo(() => {
    //生名周期
    //网络请求，数据监听
    let [count,setCount] = useState(0)
    useEffect(()=>{
        //回调函数当组件渲染完成后执行
        //放网络请求，事件监听
        document.title = count
    })
  return (
    <div>App
       计数： {count}
       <button onClick={e=>setCount(count+1)}>+1</button>
    </div>
  )
})

export default App