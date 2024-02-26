import React from "react";
import { useNavigate } from "react-router";
import { FaArrowLeft, FaArrowRight, FaYoutube } from "react-icons/fa";

function Carrds(props) {
  const { Heading, data, scrollClassName } = props;
  const navigate = useNavigate();

  const Moviedetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const scrollLeft = () => {
    var left = document.querySelector(`.${scrollClassName}`);
    if (left) {
      left.scrollBy(-350, 0);
    }
  };

  const scrollRight = () => {
    var right = document.querySelector(`.${scrollClassName}`);
    if (right) {
      right.scrollBy(350, 0);
    }
  };

  return (
    <>
      <h1 className="text-xl shadow-black font-bold mt-4 ml-6 pt-6 text-white hover:text-blue-900 cursor-pointer">
        {Heading}
      </h1>
      <div className="relative">
        <button className="" type="icon" onClick={scrollLeft}>
          <FaArrowLeft className="hover:text-white z-10 text-4xl md:text-6xl absolute lg:text-5xl lg:top-[44%] top-[48%] left-0.5 text-red-900" />
        </button>

        <div
          className={`ml-1 mt-6 ${scrollClassName} flex w-screen overflow-invisible scrollbar-hide scroll-hide scroll-smooth overflow-scroll`}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="shadow-black lg:w-[11vw] w-[26vw] hover:scale-125 group mr-4 ml-2 hover:opacity-[60%] duration-500 transition-all ease-in-out relative shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-black text-white"
            >
              <img
                className="w-full"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt="error"
              />
              <div className="text-red-600 opacity-0 group-hover:opacity-100 lg:text-5xl text-4xl absolute md:top-[30%] lg:top-[40%] lg:left-[34%] sm:top-[30%] sm:left-[37%] sm:text-5xl top-[40%] left-[33%]">
                <FaYoutube onClick={() => Moviedetail(item.id)} />
              </div>
            </div>
          ))}
        </div>

        <button type="icon" onClick={scrollRight}>
          <FaArrowRight className="hover:text-white text-4xl md:text-6xl lg:text-5xl lg:top-[44%] absolute top-[48%] right-[0.5%] text-red-900" />
        </button>
      </div>
    </>
  );
}

export default Carrds;
