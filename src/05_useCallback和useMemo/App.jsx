import React, { memo ,useCallback,useRef,useState} from 'react'

const App = memo(() => {
    const [count,setCount] = useState(0)
    const countRef=useRef()
    countRef.current=count
    const increment=useCallback(function increment(){
        setCount(countRef.current+1)
    },[])
  return (
    <div>App
        <h2>计数：{count}</h2>
        <button onClick={increment}>+1</button>
    </div>
  )
})

export default App