import React, { PureComponent } from 'react'
import { useParams } from 'react-router-dom'
function Detail(props) {
    const {id}=useParams()
  
    return (
      <div>Detail
        <h2>id:{id}</h2>
      </div>
    )
  
}

export default Detail