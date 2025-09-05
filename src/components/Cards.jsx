import { useEffect, useState } from "react";
import { Link } from "react-router";
import CardsShrimmer from "./Shrimmer/CardsShrimmer";

function Cards({ category, dataCategory }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGY4NWU3MzUxODA1MmE4YTc1ODkwOWYxNjQ3N2RlYyIsIm5iZiI6MTc1NjQ1MDk4MC42NTc5OTk4LCJzdWIiOiI2OGIxNTBhNGVmZTE3MTAwMmFiNGU2NjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NO1E9HehI62r7W9Lq4l60UdxoxYNGbOUvRESS5r4TgI",
    },
  };

  const [popularMovieData, setPopularMovieData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${dataCategory}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setPopularMovieData(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="pl-2">
      <h1 className="text-white font-600 md:text-2xl text-lg">{category}</h1>
      <div className="overflow-x-scroll no-scrollbar scroll-smooth snap-start">
        <div className="w-min flex gap-4 mt-4 ">
          {popularMovieData.length ? (
            popularMovieData.map((el) => {
              // console.log(el);
              const { title, backdrop_path, id } = el;

              return (
                <Link to={`/player/${id}`} key={id}>
                  <div className="md:w-2xs w-[180px] relative hover:cursor-pointer">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                      alt="movie"
                      className="w-full rounded-md"
                    />
                    <p className="text-white md:text-lg text-xs absolute bottom-0 right-4 font-medium text-right [text-shadow:1px_1px_2px_black]">
                      {title}
                    </p>
                  </div>
                </Link>
              );
            })
          ) : (
            <>
              <CardsShrimmer />
              <CardsShrimmer />
              <CardsShrimmer />
              <CardsShrimmer />
              <CardsShrimmer />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
