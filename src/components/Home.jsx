import Navbar from "./Navbar";
import heroBg from "../assets/hero_banner.jpg";
import heroTitle from "../assets/hero_title.png";
import play from "../assets/play_icon.png";
import info from "../assets/info_icon.png";
import Cards from "./Cards";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div>
        <div className="fixed z-1 w-full bg-navbar">
          <Navbar />
        </div>
        <div className="relative">
          <img src={heroBg} alt="hero bg" className="mask-l-from-50%" />
          <div className="w-1/2 absolute bottom-48">
            <img src={heroTitle} alt="netflix" className="w-sm" />
            <p className="text-white mt-12 text-lg">
              Discovering his ties to a secret ancient order, a young man living
              in modern Istanbul embarks on a quest to save the city from an
              immortal enemy.
            </p>

            <div className="flex gap-4 mt-8">
              <div className="bg-play flex items-center gap-2 w-[112px] h-[48px] justify-center rounded-sm hover:cursor-pointer">
                <img src={play} alt="play" className="w-[24px]" />
                <p className="text-lg font-medium">Play</p>
              </div>
              <div className="bg-info flex items-center gap-2 w-[150px] h-[48px] justify-center rounded-sm hover:cursor-pointer">
                <img src={info} alt="play" className="w-[32px]" />
                <p className="text- flgont-medium text-white">More Info</p>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-32 flex flex-col gap-16">
          <Cards category="Popular Movies" dataCategory="now_playing" />
          <Cards category="Blockbuster Movies" dataCategory="top_rated" />
          <Cards category="Only on Netflix" dataCategory="popular" />
          <Cards category="Upcoming" dataCategory="upcoming" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
