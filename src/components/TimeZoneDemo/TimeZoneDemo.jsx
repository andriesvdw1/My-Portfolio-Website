import React from 'react'
import './TimeZoneDemo.css'
import TimeZoneCard from '../TimeZoneCard/TimeZoneCard'
function TimeZoneDemo() {
  return (
    <>
    <div className='time-zone-europe'>
      <TimeZoneCard area="Europe" location ="Brussels"/>
    </div>
    <div className='time-zone-australia'>
    <TimeZoneCard area="Australia" location ="Perth"/>
    </div>
    <div className='time-zone-america'>
      <TimeZoneCard area="America" location ="Detroit"/>
      </div>
    </>
  )
}

export default TimeZoneDemo