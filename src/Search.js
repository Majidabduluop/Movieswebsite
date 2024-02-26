import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import image from "./asset/searchimgbg.jpg";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MoviesDisplay from "./MoviesDisplay";
import TVCard from "./component/TVCard";

function Search() {
  const [searchinput, setSearch] = useState({
    name: "",
  });

  const [moviesearch, setMoviesearch] = useState([]);

  const handleChange = (e) => {
    setSearch({ [e.target.name]: e.target.value });
  };

  const Moviename = async () => {
    const getdata = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=2186951629a99f0c5b5aed378950731a&query=${searchinput.name}`
    )
      .then((res) => res.json())
      .then((data) => setMoviesearch(data?.results));
  };

  const heading = "Movies";

  return (
    <div className="text-white w-screen relative">
      <div className="w-full h-[50vh]">
        <img src={image} className="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
      </div>

      <input
        type="input"
        placeholder="Enter a movie name"
        name="name"
        onChange={(e) => handleChange(e)}
        className="bg-white absolute rounded-sm lg:left-[32%] lg:px-32  md:left-[30%] top-[45%] left-[16%] sm:left-[25%] sm:px-20 px-8 py-1 text-black"
      />

      <button
        onClick={Moviename}
        className="bg-indigo-800 text-white rounded-sm px-3 py-2 xl:right-[33%] lg:right-[32%] sm:right-[26%] md:right-[26%] absolute top-[45%] right-[20%]"
      >
        {" "}
        <FaSearch />{" "}
      </button>
      <TVCard Heading={heading} data={moviesearch} />
    </div>
  );
}

export default Search;
