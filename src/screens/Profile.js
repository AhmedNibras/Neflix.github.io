import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import "./Profile.css"
function Profile() {
    const user = useSelector(selectUser)
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreenBody"> 
                <h1>Edit Profile</h1>
                <div className="profileScreenInfo">
                    <img 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F180%2F180899.png&f=1&nofb=1"
                    alt="" 
                    />
                    <div className="profileScreenDetails"> 
                    <h2>{user.email}</h2>
                    <div className="profileScreenPlans">
                    <h3>Plans</h3>
                    <button 
                        onClick = { () =>auth.signOut()} 
                        className="profileScreenSignOut">
                        Sign Out
                    </button>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Profile
