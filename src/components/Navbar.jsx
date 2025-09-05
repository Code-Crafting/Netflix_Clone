import logo from "../assets/logo.png";
import searchIcon from "../assets/search_icon.svg";
import bell from "../assets/bell_icon.svg";
import profile from "../assets/profile_img.png";
import dropdown from "../assets/caret_icon.svg";
import { Link } from "react-router";
import { useEffect, useState } from "react";

function Navbar({ movieName, setMovieName, setSearchData }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGY4NWU3MzUxODA1MmE4YTc1ODkwOWYxNjQ3N2RlYyIsIm5iZiI6MTc1NjQ1MDk4MC42NTc5OTk4LCJzdWIiOiI2OGIxNTBhNGVmZTE3MTAwMmFiNGU2NjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NO1E9HehI62r7W9Lq4l60UdxoxYNGbOUvRESS5r4TgI",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}?&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchData(res.results);
        // console.log(res.results);
      })
      .catch((err) => console.error(err));
  }, [movieName]);

  return (
    <div className="max-w-7xl flex justify-between py-2 md:py-4 px-2">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            className="md:w-[96px] md:h-[32px] 512px:w-[80px] 512px:h-[28px] w-[64px] hover:cursor-pointer"
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex gap-6 ">
        <div className="flex items-center md:gap-4 gap-2 bg-search md:w-[160px] w-[96px] py-2 px-4 rounded-sm hover:cursor-pointer ">
          <img
            src={searchIcon}
            alt="search_icon"
            className="md:w-[16px] 512px:w-[12px] w-[10px]"
          />
          <input
            type="text"
            placeholder="search..."
            className="outline-none text-white w-full text-sm 512px:text-lg"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </div>
        <img
          src={bell}
          alt="bell"
          className="md:w-[20px] 512px:w-[14px] w-[12px] hover:cursor-pointer"
        />
        <div className="flex 512px:gap-4 gap-2 justify-between items-center">
          <img
            src={profile}
            alt="profile"
            className="w-[22px] 512px:w-[25px] md:w-full rounded-sm hover:cursor-pointer"
          />
          <img
            src={dropdown}
            alt="dropdown"
            className="w-[8px] hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
