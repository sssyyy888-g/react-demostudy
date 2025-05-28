import React, { PureComponent } from 'react'
import store from '../store'
import { subNum } from '../store/actionCreator'
export class Profile extends PureComponent {
    
  constructor(props) {
    super(props)
    this.state = {
      counter:store.getState().counter.counter
    }
  }
  componentDidMount(){
    store.subscribe(()=>{
      const state=store.getState().counter
      this.setState({
        counter:state.counter
      })
    })
  }
  subNumber(num){
    store.dispatch(subNum(num))
  }
  render() {
    let {counter}=this.state
    return (
      <div>
        <h2>Profile count :{counter}</h2>
        <div>
            <button onClick={()=>this.subNumber(1)}>-1</button>
            <button onClick={()=>this.subNumber(5)}>-5</button>
            <button onClick={()=>this.subNumber(10)}>-10</button>
        </div>
      </div>
    )
  }
}

export default Profile