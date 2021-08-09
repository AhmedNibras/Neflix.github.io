import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "./axios"
import requests from "./Requests"
function Banner() {
       const [movies, setMovies] = useState([]);

       useEffect (() => {
          async function fetchData() {
              const request = await axios.get(requests.fetchTopRated);
              setMovies(
                  request.data.results[
                      Math.floor(Math.random() * request.data.results.length - 1)
                  ]
              );
              return request;
          }
          fetchData()
       }, []);

       console.log(movies);


       function truncate(string, n) {
          return string?.length > n ? string.substr(0, n -1) + '...' : string;
       }
    return (
    <header 
    className="banner" 
    style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}>
          
          <div className="bannerContents">

              <h1 className="bannerTitle"> 
               {movies?.title || movies?.name || movies?.original_name}
              </h1>
              <div className="bannerButtons">
                  <button className="bannerButton">Play</button>
                  <button className="bannerButton">My List</button>
              </div>
              <h1 className="bannerDescription"> 
              {truncate (movies?.overview, 150)}
              </h1>
          </div>

          <div className="bannerFadeBottom" />
    </header>
        
        
    );
}


export default Banner
