import React, { useContext } from 'react'
import UserContext, { DataContext } from './Context/UserContext'

const App = () => {
  const data  = useContext(DataContext)
  console.log(data);
  
  return (
    
    <div>

    
    <h1>This is app.js</h1>
    
    </div>
  )
}

export default App