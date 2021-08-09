import React from 'react'
import "./Banner.css"

function Banner() {

       function truncate(string, n) {
          return string?.length > n ? string.substr(0, n -1) + '...' : string;
       }
    return (
    <header 
    className="banner" 
    style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://i.pinimg.com/originals/b0/42/8d/b0428dfa06364283df7f951e73411cf5.jpg")`,
          backgroundPosition: "center center",
        }}>
          
          <div className="bannerContents">

              <h1 className="bannerTitle"> Movie Name</h1>
              <div className="bannerButtons">
                  <button className="bannerButton">Play</button>
                  <button className="bannerButton">My List</button>
              </div>
              <h1 className="bannerDescription"> 
              {truncate (`This is a test description This is a test description 
              This is a test descriptionThis is a test description This is a test description 
              This is a test description This is a test description`, 150)}
              </h1>
          </div>

          <div className="bannerFadeBottom" />
    </header>
        
        
    );
}

export default Banner
