import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Aside from './components/Aside'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
   <Aside/>
     <div className="main-content">
      <Navbar/>
      <section style={{
        scrollBehavior:'smooth'
      }}>
        <Outlet/>
      </section>
     </div>
    </>
  )
}

export default App
