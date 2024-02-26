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
      <div className="text-white w-full bg-black overflow-x-hidden">
        <div className="bg-white w-full">
          <div className="w-[100%] h-[80vh] relative">
            <img
              className=" w-full h-full object-cover"
              src={`${"https://image.tmdb.org/t/p/original"}${
                movie.backdrop_path
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>

        <div className="flex flex-row absolute top-[25%] left-[15%]">
          <div className=" w-[100%] h-[70vh] overflow-hidden">
            <img
              className="w-full h-full rounded object-cover"
              src={`${"https://image.tmdb.org/t/p/original"}${
                movie.poster_path
              }`}
            />
          </div>
        </div>

        <div className="overflow-hidden max-w-full absolute top-[90%] left-[15%]">
          <h1 className=" font-semibold mt-6 text-3xl hover:text-red-900 w-full">
            Title:{movie.original_title}
          </h1>
          <p className="text-xs mt-12 font-sans">Overview: {movie.overview} </p>
          <div className="flex text-sm mt-8">
            <button className="border px-1 py-1 rounded bg-yellow-900 mr-8">
              Release Data:
            </button>
            <p>{movie.release_date}</p>
          </div>
          <div className="flex text-sm mt-2">
            <button className=" border px-1 py-1 rounded bg-yellow-900  mr-12">
              Popularity:
            </button>
            <p>{movie.popularity}</p>
          </div>

          <div className="flex text-sm mt-2">
            <h1 className="border px-1 py-1 rounded bg-yellow-900   mr-12">
              Orignal Language:
            </h1>
            <p>{movie.original_language}</p>
          </div>
        </div>
      </div>

      {/* <div className="bg-black text-white max-w-full overflow-hidden">
        <h1 className="text-3xl font-bold py-20 ml-16">
          Watch Full Movies Below here...
        </h1>
      </div> */}
      <iframe
        className="overflow-hidden w-full h-[700px]"
        src={`https://vidsrc.xyz/embed/movie/${params.id}`}
      />
    </>
  );
}

export default Detail;
