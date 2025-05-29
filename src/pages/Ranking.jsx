import React, { PureComponent } from 'react'
import { useNavigate} from 'react-router-dom';
function Ranking (props){
   const navigate=useNavigate()
    const state={
        ranking:[{id:1,name:'111'},{id:2,name:'222'},{id:3,name:'333'}] 
    }
   function changeToDetail(id){
        navigate(`/detail/${id}`)
        
    }

    const {ranking}=state
    return (
      <div>Ranking
        <ul>
            {ranking.map(item=>{
                return <li key={item.id} onClick={()=>changeToDetail(item.id)}>{item.name}</li>
            })}
        </ul>
      </div>
    )
  }


export default Ranking