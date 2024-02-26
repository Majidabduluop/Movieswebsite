import Latestmovieapi from "./Latestmovieapi";
import Api from "./component/Api";
import Upcomming from "./Upcomming";
import React, { useEffect, useState } from "react";
import Poptvshowhome from "./Poptvshowhome";
import { TailSpin } from "react-loader-spinner";

function Home() {
  const [bgmovie, setbgmovie] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=2186951629a99f0c5b5aed378950731a"
      );
      const data = await response.json();
      setbgmovie(data?.results);
    };
    getMovies();
  }, []);

  useEffect(() => {
    const changeBackground = () => {
      setImageIndex((prevIndex) => (prevIndex + 1) % bgmovie.length);
    };

    const interval = setInterval(changeBackground, 5000);

    return () => clearInterval(interval);
  }, [bgmovie]);

  return (
    <>
      <div className="bg-black w-full text-white overflow-hidden">
        <div className="w-screen h-[70vh] relative">
          {bgmovie.length > 0 && (
            <>
              <img
                className="absolute top-0 left-0 h-full w-full object-cover"
                src={`https://image.tmdb.org/t/p/original${bgmovie[imageIndex].backdrop_path}`}
                alt="Background"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <h1 className="absolute lg:top-[70%] lg:text-6xl top-[76%] left-[8%] font-sans font-semibold shadow-lg italic text-3xl">
                {bgmovie[imageIndex].title}
              </h1>
            </>
          )}
        </div>

        <Api />
        <Latestmovieapi />
        <Upcomming />
        <Poptvshowhome />
      </div>
    </>
  );
}

export default Home;
