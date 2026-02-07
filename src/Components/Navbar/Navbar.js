import React, { useState } from 'react';
import './Navbar.css'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleNavLinkClick = () => {
    setShowMenu(false); // Hide the menu when a link is clicked
  };

  return (
    <div className='navbar'>
      <img className='logo' src="logo.png" alt="Signature Logo" />
      <h4 className='headline'>Software Developer, Creative Designer, Photographer</h4>
      <div id='navLinks' className={`nav-links ${showMenu ? 'show' : ''}`}>
        <a href="#home" onClick={handleNavLinkClick}>Home </a>
        <a href="#about" onClick={handleNavLinkClick}>About </a>
        <a href="#skills" onClick={handleNavLinkClick}>Skills </a>
        <a href="#projects" onClick={handleNavLinkClick}>Projects </a>
        <a href="#showcase" onClick={handleNavLinkClick}>Showcase </a>
        <a href="#contact" onClick={handleNavLinkClick}>Contact</a>
      </div>

      <div class={`burger-menu ${showMenu ? 'show' : ''}`} id='hamburger-1' onClick={toggleMenu}>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
      </div>
    </div>
  )
}

export default Navbar
