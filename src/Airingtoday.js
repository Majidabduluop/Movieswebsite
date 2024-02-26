import { useState } from "react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

function Airingtoday() {
  const navigate = useNavigate();

  const [hovered, setHovered] = useState(null);
  const [data, setData] = useState([]);

  const getdata = async () => {
    const fetchdata = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?api_key=2186951629a99f0c5b5aed378950731a"
    )
      .then((res) => res.json())
      .then((data) => setData(data?.results));
  };

  useEffect(() => {
    getdata().catch(console.error);
  }, []);

  const Moviedetail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <>
      <div className=" text-white bg-black w-screen">
        <h1 className="font-bold ml-16 py-3 mb-4">Airing Today</h1>

        <div className="flex flex-row justify-around flex-wrap w-screen">
          {data.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => Moviedetail(item.id)}
              className="relative justify-around   ml-7 mr-6  w-[calc(12%)] hover:opacity-[60%] cursor-pointer shadow-lg transform transition-all bg-black text-white  mb-3"
            >
              <img
                className="w-full rounded-2xl object-fit "
                src={`${"https://image.tmdb.org/t/p/original"}${
                  item.poster_path
                }`}
                alt="error"
              />

              {hovered === index && (
                <div className="text-red-600 overflow-hidden hover:scale-125  duration-300 ease-in-out text-3xl absolute top-[25%] left-[40%]">
                  <span className="px-12 py-12">
                    {" "}
                    <FaYoutube />
                  </span>{" "}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Airingtoday;
