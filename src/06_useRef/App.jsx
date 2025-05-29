import React, { memo ,useRef} from 'react'

const App = memo(() => {
    const titleRef=useRef()
    const inputRef=useRef()
    function showDom(){
        console.log(titleRef.current);
        inputRef.current.focus()
    }
  return (
    <div>App
        <h2 ref={titleRef} className="title">hello o </h2>
        <input ref={inputRef} type="text" />
        <button onClick={showDom}>查看title dom</button>
    </div>
  )
})

export default App