import { useState } from "react";
import React, { useEffect } from "react";
import Carrds from "./component/Carrds";

function Latestmovieapi() {
  const [data, setData] = useState([]);

  const getdata = async () => {
    const fetchdata = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=2186951629a99f0c5b5aed378950731a"
    )
      .then((res) => res.json())
      .then((data) => setData(data?.results));
  };

  useEffect(() => {
    getdata().catch(console.error);
  }, []);

  const heading = "Top Rated Tv Shows";
  const ClassName = "image2";

  return (
    <>
      <div>
        <Carrds scrollClassName={ClassName} Heading={heading} data={data} />
      </div>
    </>
  );
}

export default Latestmovieapi;
