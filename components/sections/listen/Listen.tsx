import SectionHeader from "../../section-header/SectionHeader";
import SpofityAlbum from "@/components/spotify-album/SpotifyAlbum";
import "./listen.css";

export default function Listen() {
  return (
    <section className="wrapper" id="listen">
      <div className="listen-container">
        <div className="header-layout">
          <SectionHeader
            sectionLabel="01 / Nu spelas"
            sectionHeading={
              <>
                {/* Det nya  */}
                <span className="italic">Kärleks-album</span> 
                {/* <br /> i sin */}
                {/* helhet. */}
              </>
            }
          />
          <p className="text-dark">
            {/* Kärlek-album är Temolldurs tredje fullängdsverk — en meditation om
            värme, avstånd och resonansen i ett tomt rum. Tryck på play &#x25B6; och låt
            det rinna. */}
            Ett Album dedikerad med kärlek. <br/> Skriven och komponerad av Temolldur. <br/>Tryck på play &#x25B6; och låt
            musiken flöda i öronen.
          </p>
        </div>
        <SpofityAlbum src="https://open.spotify.com/embed/album/7JTZc7mSQGxw1Iqabx6XQE?utm_source=generator&theme=0&si=1cac31dd345a49ca"/>
        <SpofityAlbum src="https://open.spotify.com/embed/album/2SYVB4EaOl78LmtM53jkwR?utm_source=generator&si=e008d5caa9024e58" style={{ height: "80" }} />
        <SpofityAlbum src="https://open.spotify.com/embed/album/4BJqNwJUGwQxw5jX7sVDjS?utm_source=generator&si=91610d17dcce4077" />
        <SpofityAlbum src="https://open.spotify.com/embed/album/5izgtCbM4yX45hoJmFmDq3?utm_source=generator&si=8ae9339492d94223" />
              
      </div>
    </section>
  );
}
