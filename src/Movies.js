import React, { useEffect, useState } from "react";
import PopularMovie from "./PopularMovie";
import Toprated from "./Toprated";
import Moviesupcomming from "./Moviesupcomming";
import image from "./asset/bgmoviepic.jpg";
import { FaSearch } from "react-icons/fa";
import TVCard from "./component/TVCard";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [movieb, setMovieb] = useState([]);

  const [searchinput, setSearch] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setSearch({ [e.target.name]: e.target.value });
  };

  const Moviename = async () => {
    const getdata = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=2186951629a99f0c5b5aed378950731a&query=${searchinput.name}`
    )
      .then((res) => res.json())
      .then((data) => setMovieb(data?.results));
  };

  const getmovies = async () => {
    const getmovies = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=2186951629a99f0c5b5aed378950731a "
    ).then((res) => res.json().then((data) => setMovies(data?.results)));
  };

  useEffect(() => {
    getmovies().catch(console.error);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heading = "  Now Playing Movies";
  const searchheading = "Movies";

  return (
    <>
      <div className="w-screen bg-black relative">
        <div className="relative w-full h-[50vh]">
          <img src={image} className="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <TVCard Heading={heading} data={movies} />
        <Moviesupcomming />
        <PopularMovie />
        <Toprated />

        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Movies;
