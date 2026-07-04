import SectionHeader from "../../section-header/SectionHeader";
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
                Det nya <span className="italic">albumet</span> <br /> i sin
                helhet.
              </>
            }
          />
          <p className="text-dark">
            Kärlek-album är Temolldurs tredje fullängdsverk — en meditation om
            värme, avstånd och resonansen i ett tomt rum. Tryck på play &#x25B6; och låt
            det rinna.
          </p>
        </div>
        <div className="listen-playlist-container">
          <div className="listen-playlist">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/album/7JTZc7mSQGxw1Iqabx6XQE?utm_source=generator&theme=0&si=1cac31dd345a49ca"
              width="100%"
              height="500"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
