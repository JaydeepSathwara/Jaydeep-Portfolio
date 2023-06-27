import React from 'react'
import Headers from './components/header/Header.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Experience from './components/experience/Experience.jsx';
import Projects from './components/projects/Projects.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Achivement from './components/achivement/Achivement.jsx';

const App = () => {
  return (
    <div>
      <Headers />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Achivement />
      <Contact />
      <Footer />
    </div>
  )
}

export default App