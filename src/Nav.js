import React, {  useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])
    
    return (
    <div className= { `nav ${show && 'navBlack'}` }>
        <div className="navContents">
            <img 
            className="navLogo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt=""
            />

            <img 
            className= "navAvatar"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F180%2F180899.png&f=1&nofb=1"
            alt=""
            />
        </div>

    </div>
            
    )
}

export default Nav
