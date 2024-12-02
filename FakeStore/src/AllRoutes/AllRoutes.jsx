import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import Home from '../components/Home'
import Product from '../components/Product'
import { AuthContext } from '../AuthContext/AuthContextProvider'
const AllRoutes = () => {
    const {isAuth} = useContext(AuthContext)
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Product' element={isAuth?<Product/>:<Login/>}/>
    
    </Routes>
  )
}

export default AllRoutes
