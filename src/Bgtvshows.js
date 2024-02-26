import React, { useEffect, useState } from "react";

function Bgtvshows() {
  const [bgmovie, setbgmovie] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?api_key=2186951629a99f0c5b5aed378950731a"
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
    <div className="bg-black w-screen h-[50vh] relative text-white">
      {bgmovie.length > 0 && (
        <>
          <img
            className="absolute top-0 left-0 h-full w-full object-cover"
            src={`https://image.tmdb.org/t/p/original${bgmovie[imageIndex].backdrop_path}`}
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <h1 className="absolute top-[70%] left-[8%] font-sans font-bold shadow-lg text-xl">
            {bgmovie[imageIndex].original_name}
          </h1>
        </>
      )}
    </div>
  );
}

export default Bgtvshows;
