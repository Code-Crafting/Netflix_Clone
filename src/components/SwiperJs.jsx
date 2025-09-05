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
        console.log(res.results.slice(0, 6));
      })
      .catch((err) => console.error(err));
  }, []);

  const shortOverview = (str, maxLength) => {
    return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
  };

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
          className="md:h-[700px] 512px:h-[500px] 448px:h-[420px] h-[370px]"
        >
          {data.map((el) => {
            const { overview, backdrop_path, name, id } = el;
            return (
              <SwiperSlide className="mask-l-from-90%" key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
                  className="w-full h-full mask-l-from-50% mask-b-from-50%"
                />

                <div className="512px:w-1/2 w-[70%] absolute md:bottom-48 md:left-24 448px:bottom-32 448px:left-12 bottom-24 left-8">
                  <h1 className="md:text-4xl 512px:text-2xl text-xl text-red-600 [text-shadow:1px_1px_2px_black]">
                    {name}
                  </h1>
                  <p className="text-white md:mt-6 512px:mt-4 mt-2 md:text-xl 512px:text-md text-sm [text-shadow:1px_1px_2px_black]">
                    {shortOverview(overview, 150)}
                  </p>

                  <div className="flex gap-4 mt-4">
                    <div
                      onClick={() =>
                        alert(
                          "Didn't implemented Player page due to incorrect responses from the API"
                        )
                      }
                      className="bg-play flex items-center gap-2 md:w-[112px] 512px:w-[96px] w-[75px] md:h-[48px] 512px:h-[36px] h-[32px] justify-center rounded-sm hover:cursor-pointer"
                    >
                      <img
                        src={play}
                        alt="play"
                        className="md:w-[24px] 512px:w-[16px] w-[12px]"
                      />
                      <p className="md:text-lg 512px:text-sm text-[12px] font-medium">
                        Play
                      </p>
                    </div>
                    <div className="bg-info flex items-center gap-2 md:w-[150px] 512px:w-[125px] w-[100px] md:h-[48px] 512px:h-[36px] h-[32px]  justify-center rounded-sm hover:cursor-pointer">
                      <img
                        src={info}
                        alt="play"
                        className="md:w-[32px] 512px:w-[24px] w-[20px]"
                      />
                      <p className="text-[12px] 512px:text-sm md:text-md xl:text-lg flgont-medium text-white">
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
