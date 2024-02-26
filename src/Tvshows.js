import { useState } from "react";
import { useEffect } from "react";
import TVCard from "./component/TVCard";
import Ontheairtvshow from "./Ontheairtvshow";
import TopratedTvShows from "./TopratedTvShows";
import Bgtvshows from "./Bgtvshows";

function Tvshows() {
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

  return (
    <>
      <Bgtvshows />
      <TVCard Heading={heading} data={data} />
      <TopratedTvShows />
      <Ontheairtvshow />
    </>
  );
}

export default Tvshows;
