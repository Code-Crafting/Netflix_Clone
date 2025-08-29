import Navbar from "./Navbar";
import heroBg from "../assets/hero_banner.jpg";
import heroTitle from "../assets/hero_title.png";
import play from "../assets/play_icon.png";
import info from "../assets/info_icon.png";

function Home() {
  return (
    <div>
      <div className="fixed z-1 w-full">
        <Navbar />
      </div>
      <div className="relative">
        <img src={heroBg} alt="hero bg" className="mask-l-from-50%" />
        <div className="w-1/2 absolute bottom-36">
          <img src={heroTitle} alt="netflix" className="w-md" />
          <p className="text-white mt-12 text-xl">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>

          <div className="flex gap-4 mt-8">
            <div className="bg-play flex items-center gap-2 w-[128px] h-[48px] justify-center rounded-sm hover:cursor-pointer">
              <img src={play} alt="play" className="w-[24px]" />
              <p className="text-xl font-medium">Play</p>
            </div>
            <div className="bg-info flex items-center gap-2 w-[180px] h-[48px] justify-center rounded-sm hover:cursor-pointer">
              <img src={info} alt="play" className="w-[32px]" />
              <p className="text-xl font-medium text-white">More Info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
