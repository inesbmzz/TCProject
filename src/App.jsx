import { useState } from 'react'
import {Routes, Route } from "react-router-dom"
import './App.css'
import ButtonHomePage from './components/Button'
import Login from './components/Login'
import HomePage from './components/Pages/HomePage'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import LoginComp from './components/LoginComp'
import AboutComp from './components/AboutComp'
import MainPage from './components/Pages/MainPage'
import AboutUs from './components/Pages/AboutUs'
import LoginPage from './components/Pages/LoginPage'


function App() {
  
  return (
  
    <div>
      <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/logIn' element={<LoginPage/>}></Route>
      <Route path='/profile' element={<MainPage/>}></Route>
      <Route path='/login' element={<LoginComp/>}></Route>
      <Route path='/button' element={<AboutComp/>}></Route>
    </Routes>
    </div>
  )
}

export default App
