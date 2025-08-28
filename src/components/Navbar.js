import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import homeIcon from '../images/icon.png'
import infoIcon from '../images/info.png'

const Navbar = () => {
  const [activeTooltip, setActiveTooltip] = useState(null)

  const handleMouseEnter = (tooltipId) => {
    setActiveTooltip(tooltipId)
  }

  const handleMouseLeave = () => {
    setActiveTooltip(null)
  }

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li 
            className='nav-item'
            onMouseEnter={() => handleMouseEnter('home')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to='/' aria-label='Accueil'>
              <img src={homeIcon} alt='icon home' className='home-icon' />
            </Link>
            {activeTooltip === 'home' && (
              <div className='tooltip' role='tooltip' aria-hidden='false'>
                Accueil
              </div>
            )}
          </li>
          <li 
            className='nav-item'
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to='/about' aria-label='À propos'>
              <img src={infoIcon} alt='icon info' className='info-icon' />
            </Link>
            {activeTooltip === 'about' && (
              <div className='tooltip' role='tooltip' aria-hidden='false'>
                À propos
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
