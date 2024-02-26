import React from "react";
import footerimg from "./asset/foter.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-black pb-20 w-full overflow-hidden">
        {/* <input type='input' placeholder='Enter a movie name' name='name'  className='bg-white absolute top-[900px] left-[100px] rounded pl-44 pr-40 pt-2 pb-2 text-black' />

<button  className='bg-indigo-800 text-white rounded-sm px-3 pt-3 pb-3 absolute top-[900px] left-[585px] border-left'> <FaSearch /> </button>
 */}

        <div className="w-full h-[50vh] bg-black overflow-hidden">
          <img
            src={footerimg}
            className="opacity-100 bg-blend-darken object-cover w-full h-full"
          />
        </div>

        <div className="text-white mt-16 overflow-hidden ">
          <Link
            to={"/"}
            className="ml-24 mt-12 cursor-pointer  font-semibold hover:text-red-900"
          >
            Home
          </Link>
          <br />
          <br />
          <Link
            to={"/tvshow"}
            className="ml-24 mt-12 cursor-pointer  font-semibold hover:text-red-900"
          >
            Tv Show
          </Link>
          <br />
          <br />
          <Link
            to={"/"}
            className="ml-24 cursor-pointer  font-semibold hover:text-red-900"
          >
            Movies
          </Link>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Footer;
