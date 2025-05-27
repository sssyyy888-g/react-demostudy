
import React, { Component ,StrictMode} from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <div>App
        <StrictMode>
            <Home></Home>
        </StrictMode>
        <Profile></Profile>
      </div>
    )
  }
}

export default App