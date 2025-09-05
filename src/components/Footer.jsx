import facebook from "../assets/facebook_icon.png";
import youtube from "../assets/youtube_icon.png";
import twitter from "../assets/twitter_icon.png";
import instagram from "../assets/instagram_icon.png";
import Links from "./Links";

function Footer() {
  const socialMedia = { facebook, youtube, twitter, instagram };
  return (
    <div className="flexjustify-center md:mt-28 mt-20">
      <div className="lg:w-[60%] md:w-[80%] w-full mx-auto pb-8 px-2 md:px-0">
        <div className="flex gap-6">
          {Object.keys(socialMedia).map((el, i) => {
            return (
              <img
                key={i}
                src={socialMedia[el]}
                alt={el}
                className="448px:w-[32px] 448px:h-[32px] w-[28px] h-[28px] hover:cursor-pointer"
              />
            );
          })}
        </div>
        <div className="flex flex-wrap justify-between mt-6">
          <Links
            links={["Audio Description", "Investor Relations", "Legal Noices"]}
          />
          <Links links={["Help Centre", "Jobs", "Cookie Preferences"]} />
          <Links
            links={["Gift Cards", "Terms of Use", "Corporate Information"]}
          />
          <Links links={["Media Centre", "Privacy", "Contact Us"]} />
        </div>

        <p className="text-gray-500 mt-6">&#169; 1997-2026 Netflic, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
