import React, { memo ,useEffect} from 'react'

const App = memo(() => {
    useEffect(()=>{
        //1.对。。。
        //有一个返回值
        //这个回调函数当组件被销毁的时候执行
        return ()=>{

        }
    },[])
    useEffect(()=>{
        //2.对store
        return ()=>{

        }
    },[])
    useEffect(()=>{
        //3.对eventBus
        return ()=>{

        }
    },[])
    //4.最后可以所有的effect抽取到自定义hook中
  return (
    <div>App</div>
  )
})

export default App