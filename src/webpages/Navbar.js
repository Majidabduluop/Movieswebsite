import React from "react";
import logo from "../asset/search.jpg";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";

function Navbar() {
  const navigate = useNavigate();

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ul
        className={`bg-${
          scrolling ? "black" : "transparent"
        } flex flex-row text-white top-0 z-10 fixed w-full pb-11 pt-5 rounded-lg`}
      >
        {/* <div className="w-[5%] h-[6vh] mt-2 mb-2">
          <img
            src={logo}
            className="object-cover w-full h-full  ml-8 rounded-full"
            alt="error"
          />
        </div> */}

        <div className="flex absolute top-6 right-[4%] gap-5">
          <Link
            to={"/"}
            className=" font-bold hover:text-red-900 cursor-pointer hover:underline  hover:duration-400 ease-in-out transition-all"
          >
            <li>Homeeeee</li>
          </Link>
          <Link
            to={"/tvshow"}
            className=" font-bold  hover:text-red-900 cursor-pointer hover:underline  hover:duration-400 ease-in-out transition-all"
          >
            <a>Tv Show</a>
          </Link>
          <Link
            to={"/movies"}
            className="font-bold hover:text-red-900 cursor-pointer hover:underline  hover:duration-400 ease-in-out transition-all"
          >
            <a>Movies</a>
          </Link>
          <button className=" hover:text-red-900 cursor-pointer hover:underline  hover:duration-400 ease-in-out transition-all">
            <Link to="/search ">
              <FaSearch className="mt-1.5" />
            </Link>
          </button>
        </div>
      </ul>
    </>
  );
}

export default Navbar;
