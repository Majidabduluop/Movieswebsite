import { useState } from "react";
import React, { useEffect } from "react";
import Carrds from "./component/Carrds";

function Poptvshowhome() {
  const [data, setData] = useState([]);

  const getdata = async () => {
    const fetchdata = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=2186951629a99f0c5b5aed378950731a"
    )
      .then((res) => res.json())
      .then((data) => setData(data?.results));
  };

  useEffect(() => {
    getdata().catch(console.error);
  }, []);

  const heading = "Popular Tv Shows";
  const Classname = "image4";

  return (
    <>
      <div>
        <Carrds scrollClassName={Classname} Heading={heading} data={data} />
      </div>
    </>
  );
}

export default Poptvshowhome;
