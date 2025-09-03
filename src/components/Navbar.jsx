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
    <div className="max-w-7xl flex justify-between py-4">
      <div className="flex gap-12 justify-between">
        <Link to="/">
          <img
            src={logo}
            className="w-[96px] h-[32px] hover:cursor-pointer"
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex gap-6 ">
        <div className="flex gap-4 bg-search w-[160px] py-2 px-4 rounded-sm hover:cursor-pointer">
          <img src={searchIcon} alt="search_icon" className="w-[16px]" />
          <input
            type="text"
            placeholder="search..."
            className="outline-none text-white w-full"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </div>
        <img src={bell} alt="bell" className="w-[20px] hover:cursor-pointer" />
        <div className="flex gap-4 justify-between items-center">
          <img
            src={profile}
            alt="profile"
            className="rounded-sm hover:cursor-pointer"
          />
          <img src={dropdown} alt="dropdown" className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
