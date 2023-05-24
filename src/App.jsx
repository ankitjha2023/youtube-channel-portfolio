import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Videos from './pages/Videos'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import Playlist from './pages/Playlist'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/videos" element={<Videos/>}/>
      <Route path="/playlist" element={<Playlist/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
