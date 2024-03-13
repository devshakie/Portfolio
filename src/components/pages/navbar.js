import React, { useState } from 'react';
import { Link } from 'react-scroll'; 
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'

import { NavLink } from 'react-router-dom';
//import { useRef } from 'react';

const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
      <div className='links'>
      <nav className='navbar'>
              <ul className={`list-unstyled d-flex ${click ? "nav-menu active" : "nav-menu"}`}>
                  <li  className='nav-item px-3'>
              <Link to='/'>
                 Home
                      </Link>
                      </li>
          </ul>
              <div className='hamburger' onClick={handleClick}>
                  {click ? (<FaTimes size={30} style=  {{ color: '#ffffff' }} />)
                      : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

        </div>
        
              <ul className={`list-unstyled d-flex ${click ? "nav-menu active" : "nav-menu"}`}>
                  <li className='nav-item px-3'>
                      <Link to='about' spy={true} smooth={true} offset={-40} duration={500} onClick={closeMenu}>About</Link>
                  </li>
                  <li className='nav-item px-3'>
                      <Link to ='projects'  spy={true} smooth={true} offset={-40} duration={500} onClick={closeMenu}>Projects</Link>
                  </li>
                  <li className='nav-item px-3'>
                      <Link to='blogs'  spy={true} smooth={true} offset={-40} duration={500} onClick={closeMenu}>Blogs</Link>
                  </li>
                  <li className='nav-item px-3'>
                      <Link to='contacts'  spy={true} smooth={true} offset={-40} duration={500} onClick={closeMenu}>Contacts</Link>
                  </li>
              </ul>
          </nav>
      </div>
  )
}

export default Navbar;