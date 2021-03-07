import './App.css';
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import camera2 from './images/johnny_automatic_digital_camera.png'

function App() {
  return (
    <div className="App">
      <img src={camera2} alt="vintage camera clip art" className="image cam2"/>
      <Navbar/>
      <About/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
