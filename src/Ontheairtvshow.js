import { useState } from "react";
import React, { useEffect } from "react";
import TVCard from "./component/TVCard";

function Ontheairtvshow() {
  const [data, setData] = useState([]);

  const getdata = async () => {
    const fetchdata = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=2186951629a99f0c5b5aed378950731a"
    )
      .then((res) => res.json())
      .then((data) => setData(data?.results));
  };

  useEffect(() => {
    getdata().catch(console.error);
  }, []);

  const heading = "On The Air";

  return (
    <>
      <TVCard Heading={heading} data={data} />
    </>
  );
}

export default Ontheairtvshow;
