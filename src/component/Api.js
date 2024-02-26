import { useState } from "react";
import React, { useEffect } from "react";
import Carrds from "./Carrds";

function Api() {
  const [data, setData] = useState([]);

  const getdata = async () => {
    const fetchdata = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=2186951629a99f0c5b5aed378950731a"
    )
      .then((res) => res.json())
      .then((data) => setData(data?.results));
  };

  useEffect(() => {
    getdata().catch(console.error);
  }, []);

  const Heading = "Popular Movies";

  return (
    <>
      <div>
        <Carrds Heading={Heading} data={data} />
      </div>
    </>
  );
}

export default Api;
