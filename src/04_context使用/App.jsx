import React, { memo ,useContext} from 'react'

import { UserContext,ThemeContext } from './context'
const App = memo(() => {
    const user=useContext(UserContext)
    const theme=useContext(ThemeContext)
  return (
    <div>
      <h2>User:{user.name}</h2>
      <h2 style={{color:theme.color}}>theme</h2>
    </div>
  )
})

export default App