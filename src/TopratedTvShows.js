import { useState } from "react";
import React, { useEffect } from "react";
import TVCard from "./component/TVCard";

function TopratedTvShows() {
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

  return (
    <>
      <TVCard Heading={heading} data={data} />
    </>
  );
}

export default TopratedTvShows;
