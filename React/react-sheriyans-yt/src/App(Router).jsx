import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import RouterHeader from './components/RouterHeader'

const App = () => {
  return (
    <div>
    <RouterHeader/>
  <Routes>
    <Route  path='/' element ={<Home/>} />
    <Route  path='/about' element ={<About/>} />
    <Route  path='/contact' element ={<Contact/>} />
    <Route  path='/product' element ={<Product/>} />
  </Routes>

    </div>
  )
}

export default App  