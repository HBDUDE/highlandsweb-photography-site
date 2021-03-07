import React, { useEffect } from 'react'

import './App.css';
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import camera2 from './images/johnny_automatic_digital_camera.png'

function App() {
  const scrollFunction = () => {
    document.querySelector("#next-section-button").style.opacity = 0
  }

  useEffect(() => {
    window.onscroll = () => scrollFunction()
  }, [])

  return (
    <div className="App">
      <img src={camera2} alt="vintage camera clip art" className="image cam2"/>
      <div id="next-section-button">Scroll down for more content!</div>
      <Navbar/>
      <About/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
