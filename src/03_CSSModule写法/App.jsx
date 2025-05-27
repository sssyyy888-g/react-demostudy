import React, { PureComponent } from 'react'
import  appStyle from './App.module.css'
import Home from './Home/Home'
export class App extends PureComponent {
  render() {
    return (
      <div>App
        <h1 className={appStyle.title}>Hello World</h1>
        <Home/>
      </div>
    )
  }
}

export default App