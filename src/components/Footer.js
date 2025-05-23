import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/guillaume-séré" target="_blank" rel="noopener noreferrer"><BsLinkedin className='link' /></a>
                <p className='footer-name'>&copy; Guillaume SERE</p>
                <a href="https://github.com/GuillaumeSere" target="_blank" rel="noopener noreferrer"><BsGithub className='link' /></a>
            </div>
        </div>
    )
}

export default Footer
