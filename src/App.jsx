import React from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Components/Remaining/Home"
import Cars from "./Components/Remaining/Cars"
import Inspirations from "./Components/Remaining/Inspirations"
import Tripfinder from "./Components/Remaining/TripFinder"
import Footer from './Components/Footer/Footer'
import Loginform from './Components/Remaining/Loginform'


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cars' element={<Cars />} />
          <Route path='/Tripfinder' element={<Tripfinder />} />
          <Route path='/Inspirations' element={<Inspirations />} />
          <Route path='/Loginform' element={<Loginform />} />
          
          <Route path='/*' element={<> <h1>Page not Found 400 !!..</h1></>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App