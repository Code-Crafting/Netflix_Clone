import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";
import SwiperJs from "./SwiperJs";
import { useState } from "react";
import SearchPage from "./SearchPage";

function Home() {
  const [searchData, setSearchData] = useState([]);
  const [movieName, setMovieName] = useState("");

  return (
    <>
      <div>
        <div className="fixed z-10 w-full bg-navbar">
          <Navbar
            movieName={movieName}
            setMovieName={setMovieName}
            setSearchData={setSearchData}
          />
        </div>
        {!movieName ? (
          <>
            <div className="relative z-0">
              <SwiperJs />
            </div>

            <div className="-mt-32 flex flex-col gap-16 z-1">
              <Cards category="Popular Movies" dataCategory="now_playing" />
              <Cards category="Blockbuster Movies" dataCategory="top_rated" />
              <Cards category="Only on Netflix" dataCategory="popular" />
              <Cards category="Upcoming" dataCategory="upcoming" />
            </div>

            <Footer />
          </>
        ) : (
          <SearchPage searchData={searchData} />
        )}
      </div>
    </>
  );
}

export default Home;
