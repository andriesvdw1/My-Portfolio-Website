import React from 'react'
import './BarColumn.css'
function BarColumn({h}) {
  return (
    <div className='bar-column' style={{height:`${h}px`}}>
        <div className='bar-column-fill'></div>
    </div>
  )
}

export default BarColumn