import Search from "./Search";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";
import Tvshows from "./Tvshows";
import Navbar from "./webpages/Navbar";
import Footer from "./Footer";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/tvshow" element={<Tvshows />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
