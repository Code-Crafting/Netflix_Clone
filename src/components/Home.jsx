import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";
import SwiperJs from "./SwiperJs";

function Home() {
  return (
    <>
      <div>
        <div className="fixed z-10 w-full bg-navbar">
          <Navbar />
        </div>
        <div className="relative z-0">
          <SwiperJs />
        </div>

        <div className="-mt-32 flex flex-col gap-16 z-1">
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
