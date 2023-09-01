import React from 'react'
import "./ProfileScreen.css"
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../Firebase'

const plansData = [
  {title: "Premium", details: "4k+HDR"},
  {title: "Standard", details: "1080p"},
  {title: "Basic", details: "720p"}
]

function ProfileScreen() {
    const user = useSelector(selectUser)
  return (
    <div className='profileScreen'>
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            <div className="profileScreen_details">
                <h2>{user.email}</h2>
                <div className="profileScreen_plans">
                  {/* <h3>Plans</h3>
                  <div className='plans'>
                    <h3>Premium<br/><span className='fourk'>4k+HDR</span></h3>
                    <button className='subs_button'>Subscribe</button>
                  </div> */}
                  {plansData.map((plan, index) => (
                    <div className="plans" key={index}>
                      <h3>{plan.title}<br /><span className='fourk'>{plan.details}</span></h3>
                      <button className='subs_button'>Subscribe</button>
                    </div>
                  ))}
                    <button onClick={()=>auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
