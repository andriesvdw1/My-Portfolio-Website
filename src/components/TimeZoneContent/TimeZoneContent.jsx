import React from 'react';
import './TimeZoneContent.css';
import TimeZoneHeading from '../TimeZoneHeading/TimeZoneHeading';
import TimeZoneDemo from '../TimeZoneDemo/TimeZoneDemo';
function TimeZoneContent() {
  return (
    <div className='time-zone-content-container' id='time-zone'>
        <TimeZoneHeading/>
        <TimeZoneDemo/>
    </div>
  )
}

export default TimeZoneContent