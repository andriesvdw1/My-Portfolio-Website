import React from 'react';
import './Footer.css';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Portfolio from '../Portfolio/Portfolio';
import History from '../History/History';
import Contact from '../Contact/Contact';

function Footer() {
  return (
    <footer className='footer'>
        <Experience/>
        <Education/>
        <Portfolio/>
        <History/>
        <Contact/>
    </footer>
  )
}

export default Footer