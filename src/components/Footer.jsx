import facebook from "../assets/facebook_icon.png";
import youtube from "../assets/youtube_icon.png";
import twitter from "../assets/twitter_icon.png";
import instagram from "../assets/instagram_icon.png";
import Links from "./Links";

function Footer() {
  const socialMedia = { facebook, youtube, twitter, instagram };
  return (
    <div className="flex justify-center mt-28">
      <div className="w-[60%] mx-auto pb-8">
        <div className="flex gap-6">
          {Object.keys(socialMedia).map((el) => {
            return (
              <img
                src={socialMedia[el]}
                alt={el}
                className="w-[32px] h-[32px]"
              />
            );
          })}
        </div>
        <div className="flex justify-between mt-6">
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
