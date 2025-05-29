import { useState } from "react";
function CountHook(props) {
    let [count,setCount] = useState(0)
    let [name,setName]=useState("why")
    function changeName(){
        setName("kobe")
    }
    return (
        <div>
            <h2>计数：{count}</h2>
            <button onClick={e=>setCount(count+1)}>+1</button>
            <button onClick={e=>setCount(count-1)}>-1</button>
            <h2>姓名：{name}</h2>
            <button onClick={changeName}>修改名称</button>
        </div>
    )

}
export default CountHook;