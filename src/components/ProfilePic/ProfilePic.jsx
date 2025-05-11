import React from 'react'
import './ProfilePic.css'
import ProfileImage from '../../assets/andries.jpg'
function ProfilePic() {
  return (
    <div className="profile-pic-r1-c1">
        <img className='profile-picture' src={ProfileImage} alt="Andries profile image" />
    </div>
  )
}

export default ProfilePic