import React from 'react'
import './Experience.css'
import figmaIcon from '../../assets/figma-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import sqliteIcon from '../../assets/sqlite-icon.svg';
import htmlIcon from '../../assets/HTML-icon.svg';
function Experience() {
  return (
    <div className='exp'>
      
      <div className='inner-container-exp' id='experience'> 
      <div className='exp-heading'>Experience</div>
        <div>Experience using these tools to speed up development of websites:</div>
        <div><img src={figmaIcon} className='icon'/>Figma (layout design)</div>
        <div><img src={reactIcon} className='icon'/>ReactJS (currently learning)</div>
        <div><img src={htmlIcon} className='icon'/>HTML5 & CSS3</div>
        <div><img src={sqliteIcon} className='icon'/>Sqlite 3 (lightweight web database)</div>
        <div>Created this CV website using ReactJS and Figma.</div>
      </div> 
    </div>
  )
}

export default Experience