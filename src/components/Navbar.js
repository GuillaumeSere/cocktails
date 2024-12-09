import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import homeIcon from '../images/icon.png'
import infoIcon from '../images/info.png'  
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>
              <img src={homeIcon} alt='icon home' className='home-icon' />
            </Link>
          </li>
          <li>
            <Link to='/about'>
            <img src={infoIcon} alt='icon info' className='info-icon' />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
