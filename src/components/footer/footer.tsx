import config from "@/config.json";
import NewsLetter from "./newsletter";
import SiteMap from "./site-map";
import End from "./end";
import ReturnToTop from "./return-to-top";

interface Props {

}
export default function Footer({}: Props) {
  return (
    <footer className="flex flex-col items-center justify-center px-4 gap-y-4 w-full">
      <NewsLetter company={config["company"]} />
      <span className="w-full border border-accent/40"></span>
      <SiteMap sections={config['footer-sections']} />
      <span className="w-full border border-accent/40"></span>
      <End company={config["company"]} ourContactInfo={config["ourContactInfo"]}/>
      <span className="w-full border border-accent/40"></span>
      <ReturnToTop />
    </footer>
  );
}
