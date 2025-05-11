import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TimeZoneCard.css';
import '../../components/TimeZoneDemo/TimeZoneDemo.css';
import loadingUrl from '../../assets/loading.gif';
 
function TimeZoneCard ({area, location}) {
  const [timeZoneData, setTimeZoneData] = useState(null);
  
  useEffect(() => {
    // When the component mounts fetch the data from the API
    axios
      .get(`https://timeapi.io/api/time/current/zone?timeZone=${area}%2F${location}`)
      .then((response) => {
        setTimeZoneData(response.data);
        //setTimeZoneData(null);
      })
      .catch((error) => {
        console.error('Error fetching time zone data:', error);
      });
  }, []); // Run the request only once by using an empty dependency array 

  if (!timeZoneData) {
    return <div className='loading-outer'><img className='loading-inner' src={loadingUrl} alt="loading animation" /></div>; // Show loading animation GIF while waiting for the response
  }

  return (
    
    <div className='time-zone-card'>
      <div className='card-time-content'>
        <p className='tzone-text'><strong>Time Zone:</strong> {timeZoneData.timeZone}</p>
        <p className='tzone-day'><strong>Day of Week:</strong> {timeZoneData.dayOfWeek}</p>
        <p className='tzone-time'><strong>Time:</strong> {timeZoneData.time}</p>
      </div>
    
    </div>
  );
};

export default TimeZoneCard;
