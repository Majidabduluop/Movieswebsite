import React, { useEffect, useState } from "react";
import TVCard from "./component/TVCard";

function Toprated() {
  const [moviec, setMovies] = useState([]);

  const getmovies = async () => {
    const getmovies = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=2186951629a99f0c5b5aed378950731a "
    ).then((res) => res.json().then((data) => setMovies(data?.results)));
  };
  useEffect(() => {
    getmovies().catch(console.error);
  }, []);
  const heading = " Top Rated Movies";

  return (
    <>
      <TVCard Heading={heading} data={moviec} />
    </>
  );
}

export default Toprated;
