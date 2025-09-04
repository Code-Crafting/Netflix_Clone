import { Swiper, SwiperSlide } from "swiper/react";
import play from "../assets/play_icon.png";
import info from "../assets/info_icon.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import HeroShrimmer from "./Shrimmer/HeroShrimmer";

function SwiperJs() {
  const [data, setData] = useState([]);

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
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.results.slice(0, 6));
        // console.log(res.results.slice(0, 6));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {data.length ? (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className=""
        >
          {data.map((el) => {
            const { overview, backdrop_path, name, id } = el;
            return (
              <SwiperSlide className="text-white mask-l-from-90%" key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
                  className="w-full h-full mask-l-from-50% mask-b-from-50%"
                />

                <div className="w-1/2 absolute bottom-48 left-24">
                  <h1 className="text-4xl text-red-600 [text-shadow:1px_1px_2px_black]">
                    {name}
                  </h1>
                  <p className="text-white mt-6 text-xl [text-shadow:1px_1px_2px_black]">
                    {overview}
                  </p>

                  <div className="flex gap-4 mt-8">
                    <div
                      onClick={() =>
                        alert(
                          "Didn't implemented Player page due to incorrect responses from the API"
                        )
                      }
                      className="bg-play flex items-center gap-2 w-[112px] h-[48px] justify-center rounded-sm hover:cursor-pointer"
                    >
                      <img src={play} alt="play" className="w-[24px]" />
                      <p className="text-lg font-medium">Play</p>
                    </div>
                    <div className="bg-info flex items-center gap-2 w-[150px] h-[48px] justify-center rounded-sm hover:cursor-pointer">
                      <img src={info} alt="play" className="w-[32px]" />
                      <p className="text- flgont-medium text-white">
                        More Info
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <HeroShrimmer />
      )}
    </>
  );
}

export default SwiperJs;
