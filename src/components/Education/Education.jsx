import React from 'react'
import './Education.css'
function Education() {
  return (
    <div className="r6-col-span-1" id='education'>
        <div>Education</div>
            <div className='edu-card'>                
                <div>2023-current</div>
                <div>Diploma in Information Technology</div>
                <div>Belgium Campus ITversity</div>
            </div>

            <div className='edu-card'>
                <div>2013</div>
                <div>Web Design with HTML5 and CSS3 </div>
                <div>New Horizons</div>
            </div>

            <div className='edu-card'>
                <div>2010</div>
                <div>Introduction to Visual C#.NET Programming</div>
                <div>INTEC</div>
            </div>

        <div className='edu-card'>
            <div>2005-2009</div>
            <div>Matriculated High school 2009</div>
            <div>Hoërskool Jeugland</div>
        </div>
        
    </div>
  )
}

export default Education