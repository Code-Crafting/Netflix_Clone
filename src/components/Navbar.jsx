import logo from "../assets/logo.png";
import searchIcon from "../assets/search_icon.svg";
import bell from "../assets/bell_icon.svg";
import profile from "../assets/profile_img.png";
import dropdown from "../assets/caret_icon.svg";

function Navbar() {
  const liContent = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My List",
    "Browse by Language",
  ];
  return (
    <div className="flex justify-between">
      <div className="flex gap-12 justify-between">
        <img
          src={logo}
          className="w-[96px] h-[32px] hover:cursor-pointer"
          alt="logo"
        />
        <ul className="flex gap-4 items-center font-medium">
          {liContent.map((el, index) => (
            <li key={index} className="text-white hover:cursor-pointer">
              {el}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-6 ">
        <div className="flex gap-4 bg-search w-[160px] py-2 px-4 rounded-sm hover:cursor-pointer">
          <img src={searchIcon} alt="search_icon" className="w-[16px]" />
          <input
            type="text"
            placeholder="search..."
            className="outline-none text-white w-full"
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
