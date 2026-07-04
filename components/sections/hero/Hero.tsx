import LatestAlbum from "../../latest-album/LatestAlbum";
import "./hero.css";
export default function Hero() {
  return (
    <section className="hero overlay sides-padding">
      <span className="text-orange letter-spacing">NY ALBUM UTE NU</span>
      <LatestAlbum titleWhite="Ember" titleOrange="Choir" description="   Elva spår med långsamt spelad fingerplockad gitarr, inspelade under en
          enda helg i ett ökenkapell utanför Marfa."/>
    </section>
  );
}
