import React from 'react'
import './Nav.css'
import cvPDF from '../../assets/CV Andries van der Westhuizen.pdf'

function Nav() {
  const handleNavigateContact = () => {
    const contactSection = document.getElementsByClassName('inner-contact')[0];
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="nav-r1-c3">
      <span className='nav-spacer-top'></span>
      <div>
        <a href={cvPDF} download="CV Andries van der Westhuizen.pdf" target='_blank' rel="noopener noreferrer">
          CV download link
        </a>
      </div>
      <div>
        <button className='nav-button' onClick={handleNavigateContact}>
          Contact me
        </button>
      </div>
      <div>
        <a href='https://github.com/andriesvdw1' target='_blank' rel="noopener noreferrer">
          Github projects page
        </a>
      </div>
      <span className='nav-spacer-bottom'></span>
    </nav>
  )
}

export default Nav
