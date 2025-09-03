import { Link, useParams } from "react-router";
import back from "../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";

function Player() {
  const { id } = useParams();
  const [movieKey, setMovieKey] = useState("");
  const [{ title, genres, overview, date }, setMovieInfo] = useState({
    title: "",
    genres: [],
    overview: "",
    date: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGY4NWU3MzUxODA1MmE4YTc1ODkwOWYxNjQ3N2RlYyIsIm5iZiI6MTc1NjQ1MDk4MC42NTc5OTk4LCJzdWIiOiI2OGIxNTBhNGVmZTE3MTAwMmFiNGU2NjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NO1E9HehI62r7W9Lq4l60UdxoxYNGbOUvRESS5r4TgI",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const [video, info] = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        ),
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          options
        ),
      ]);

      const [videoRes, infoRes] = await Promise.all([
        video.json(),
        info.json(),
      ]);

      console.log(videoRes);

      console.log(infoRes);

      setMovieKey(videoRes.results[0].key);
      setMovieInfo({
        title: infoRes.title,
        genres: infoRes.genres,
        overview: infoRes.overview,
        date: infoRes.release_date,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="h-dvh">
      <div className="flex flex-col justify-center h-full">
        <Link to="/">
          <img src={back} alt="back" className="w-[48px]" />
        </Link>

        <div className="flex justify-between h-[480px] mt-8 gap-8">
          <div className="w-1/2 shadow-lg shadow-gray-900/50 overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${movieKey}?&rel=0`}
              height="100%"
              width="100%"
              allowFullScreen
              className=""
            ></iframe>
          </div>

          <div className="w-1/2 text-white flex flex-col gap-4 justify-center">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="text-overview">" {overview} "</p>
            <div className="flex gap-4 items-center text-xl">
              <p className="font-medium">Release Date:</p>
              <p>{date.split("-").reverse().join("-")}</p>
            </div>
            <div className="flex gap-4 items-center text-xl">
              <p className="font-medium">Genres: </p>
              {genres.map((el, i) => {
                return (
                  <p key={i} className="">
                    {i < genres.length - 1 ? el.name + "," : el.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
