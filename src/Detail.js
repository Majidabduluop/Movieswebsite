import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./webpages/Navbar";

function Detail() {
  const params = useParams();

  const [movie, setMovie] = useState("");

  const Moviedetails = async () => {
    let getdata = fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=2186951629a99f0c5b5aed378950731a`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  useEffect(() => {
    Moviedetails().catch(console.error);
  }, []);

  return (
    <>
      <div className="w-full h-[100vh] relative">
        <img
          className=" w-full h-full object-cover"
          src={`${"https://image.tmdb.org/t/p/original"}${movie.backdrop_path}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent"></div>
      </div>

      <div className="absolute top-[17%] left-[3%] grid grid-cols-1 lg:grid lg:grid-cols-3 lg:left-6 lg:top-[20%] md:grid md:grid-cols-2 md:top-[30%] md:left-2">
        <div className="md:w-[90%] md:h-[70vh] w-[80%] h-[40vh] overflow-hidden">
          <img
            className="w-full h-full rounded object-contain"
            src={`${"https://image.tmdb.org/t/p/original"}${movie.poster_path}`}
          />
        </div>

        <div className="mt-6 text-white">
          <h1 className="font-semibold text-xl hover:text-red-900">
            Title:{movie.original_title}
          </h1>
          <p className="md:text-sm text-xs mt-2 md:mt-6 font-sans">
            Overview: {movie.overview}{" "}
          </p>
          <div className="mt-4 flex flex-row gap-12 md:mt-8">
            {" "}
            <span className="border rounded px-2 bg-yellow-900">
              Release Data:
            </span>
            <span>{movie.release_date}</span>
          </div>
          <div className="mt-4 flex flex-row gap-16 md:mt-6">
            <p className="border px-2 rounded bg-yellow-900">Popularity:</p>
            <p>{movie.popularity}</p>
          </div>
          <div className="mt-4 flex flex-row md:mt-6">
            <h1 className="border px-1 py-1 rounded bg-yellow-900 mr-12">
              Orignal Language:
            </h1>
            <p>{movie.original_language}</p>
          </div>
        </div>
      </div>

      <div className="bg-black text-white pt-36 pb-14 text-xl text-center font-bold">
        <h1 className="">Watch Full Movies Below here...</h1>
      </div>

      <iframe
        className="overflow-hidden w-full h-[70vh] lg:h-[85vh]"
        src={`https://vidsrc.xyz/embed/movie/${params.id}`}
      />
      <div className="bg-black py-14"></div>
    </>
  );
}

export default Detail;
