import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Category from './pages/Category'
import './style.css'
import store from './store'
export class App extends PureComponent {
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
  render() {
    const {counter}=this.state
    return (
      <div>
        <h2>App count :{counter}</h2>
        <div className='pages'>
        <Home/>
        <Profile/>
        <About/>
        <Category/>
       </div>
      </div>
      
    )
  }
}

export default App