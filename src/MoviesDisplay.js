import { FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const MoviesDisplay = ({ data }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const Moviedetail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <>
      <div className="bg-black w-screen">
        <div className="flex flex-wrap">
          {data.map((item, index) => (
            <div
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              key={index}
              onClick={() => Moviedetail(item.id)}
              className="relative justify-around rounded-3xl hover:opacity-[60%] ml-7 mr-6  w-[calc(12%)] hover:scale-125  cursor-pointer  overflow-hidden mt-4  duration-500 ease-in-out  bg-black text-white"
            >
              <img
                className="w-full"
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
};

export default MoviesDisplay;
