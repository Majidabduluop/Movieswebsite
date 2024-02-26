import React from 'react'
import { useEffect, useState } from 'react';

function Dynamicbg() {

    const [bgmovie, setbgmovie] = useState([]);
  const [images, setimages] = useState([]);
  const [imagebackground, setimagebackground] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      let getdata = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=2186951629a99f0c5b5aed378950731a"
      )
        .then((res) => res.json())
        .then((data) => setbgmovie(data?.results));
    };

    getMovies();
  }, []);

  useEffect(() => {
    const posterpath = bgmovie
      .map((movie) => movie.backdrop_path)
      .filter(Boolean);

    if (posterpath.length > 0) {
      
      setimages(posterpath);
    }
  }, [bgmovie]);


  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    
    const imageUrl = images[randomIndex];
    setimagebackground(imageUrl);
  }, 5000);

  

  return (
    <>

      <div className="w-full h-[70vh] relative">
            <img
              className="absolute top-0 left-0 h-full w-full object-cover"
              src={`${"https://image.tmdb.org/t/p/original"}${imagebackground}`}
            />
               <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
     
     

    
    </>
  )
}

export default Dynamicbg