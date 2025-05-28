import React, { PureComponent } from 'react'
import store from '../store/index'
import { addNum } from '../store/actionCreator'
export class Home extends PureComponent {
    
  constructor(props) {
    super(props)
    this.state = {
      counter:store.getState().counter
    }
  }
  componentDidMount(){
    store.subscribe(()=>{
      const state=store.getState()
      this.setState({
        counter:state.counter
      })
    })
  }
  addNumber(num){
    store.dispatch(addNum(num))
  }
  render() {
    let {counter}=this.state
    return (
      <div>
        <h2>Home count :{counter}</h2>
        <div>
            <button onClick={()=>this.addNumber(1)}>+1</button>
            <button onClick={()=>this.addNumber(5)}>+5</button>
            <button onClick={()=>this.addNumber(10)}>+10</button>
        </div>
      </div>
    )
  }
}

export default Home