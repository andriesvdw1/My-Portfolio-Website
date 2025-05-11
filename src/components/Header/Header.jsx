import React from 'react';
import ProfilePic from '../ProfilePic/ProfilePic';
import Hello from '../Hello/Hello';
import Nav from '../Nav/Nav';
import Language from '../Language/Language';
import GeneralInfo from '../GeneralInfo/GeneralInfo';
import './Header.css'
function Header() {
  return (
    <header className='header'>
      <ProfilePic />
      <Hello />
      <Nav />
      <Language />
      <GeneralInfo />
    </header>
  )
}

export default Header