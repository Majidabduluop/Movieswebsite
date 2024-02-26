import React from "react";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function TVCard(props) {
  const navigate = useNavigate();
  const Heading = props.Heading;
  const Moviedetail = (id) => {
    navigate(`/detail/${id}`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" text-white bg-black w-screen">
        <h1 className="font-bold text-2xl ml-6 pt-12  mb-4">{Heading}</h1>

        <div className="flex flex-row mt-12 gap-6 lg:gap-6 md:gap-8 justify-center flex-wrap w-screen">
          {props.data.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-xl md:w-[18vw] w-[26vw] lg:w-[14vw]  hover:scale-125 duration-500 ease-in-out cursor-pointer  shadow-lg transform transition-all  bg-black text-white mb-4"
            >
              <img
                className="w-full rounded-lg object-fit "
                src={`${"https://image.tmdb.org/t/p/original"}${
                  item.poster_path
                }`}
                alt="error"
              />

              <div className="text-red-600 absolute lg:top-[40%] lg:left-[40%] sm:top-[46%] sm:left-[42%] sm:text-4xl opacity-0 group-hover:opacity-100 top-[40%] left-[38%] text-3xl">
                <FaYoutube onClick={() => Moviedetail(item.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TVCard;
