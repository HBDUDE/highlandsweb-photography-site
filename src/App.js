import React, { useState } from 'react'

import './App.css';
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import camera2 from './images/johnny_automatic_digital_camera.png'

function App() {
  // const [scrollSection, setScrollSection] = useState("#top")

  return (
    <div className="App">
      <img src={camera2} alt="vintage camera clip art" className="image cam2"/>
      {/* <div id="next-section-button"><a>Next Section</a></div> */}
      <Navbar/>
      <About/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
