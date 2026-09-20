import LatestAlbum from "../../latest-album/LatestAlbum";
import "./hero.css";
export default function Hero() {
  return (
    <section className="hero overlay sides-padding">
      <div className="wrapper">
        <span className="text-orange letter-spacing">3 ALBUM UTE NU</span>
        <LatestAlbum
          titleWhite="Temoll"
          titleOrange="Dur"
          description="Gitarr, rapp och sång från hemma studio"
        />
      </div>
    </section>
  );
}
