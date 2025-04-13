import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
// import BookMeeting from './Pages/BookMeeting'

export default function App() {
 
 
  return (
    <>
    
    <Navbar/>
    <div className='all-page-container'>
      <Routes>
        <Route path='/'element={<Home/>}/>
      

      </Routes>
       {/* <Home/> */}
  
    </div>
    
    </>
  )
}
// Express Yourself in Style & Sound!
// Wear It. Hear It. Love It.