import Cards from "./Cards";
import { useEffect, useState } from "react";

function CardsCon({ category, dataCategory }) {
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
    <div>
      <h1 className="text-white font-600 text-2xl">{category}</h1>
      <div className="overflow-x-scroll no-scrollbar scroll-smooth snap-start">
        <div className="w-min flex gap-4 mt-4 ">
          <Cards data={popularMovieData} />
        </div>
      </div>
    </div>
  );
}

export default CardsCon;
