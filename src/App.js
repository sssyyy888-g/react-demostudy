import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import './style.css'
import { connect } from 'react-redux'

export class App extends PureComponent {
  render() {
     const {counter}=this.props
    return (
     
      <div>
        App count :{counter}
         <div className='pages'>
          <Home/>
          <Profile/>
         </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    counter:state.counter.counter
  }
}

export default connect(mapStateToProps)(App)