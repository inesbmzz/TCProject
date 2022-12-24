import { useState } from 'react'
import {Routes, Route } from "react-router-dom"
import './App.css'
import Login from './components/Login'
import HomePage from './components/Pages/HomePage'
import Profile from './components/Profile'



function App() {
  
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default App
