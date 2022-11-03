import React, { useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Herosection from '../components/Herosection'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import './Homepage.scss'
import Sidebar from '../components/Sidebar'


export default function Homepage() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Herosection />
        <About />
        <Services />
        <Contact />
      </div>
    </div>
  );
}
