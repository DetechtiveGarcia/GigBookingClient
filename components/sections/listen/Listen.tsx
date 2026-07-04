import SectionHeader from "../../section-header/SectionHeader";
import "./listen.css";

export default function Listen() {
  return (
    <section>
      <div className="listen-container">
        <div className="header-layout">
          <SectionHeader
            sectionLabel="01 / Nu spelas"
            sectionHeading={
              <>
                The new <span className="italic">record</span>, in full.
              </>
            }
          />
          <p className="text-dark">
            Ember Choir is the third full-length from Kade Ronan — a meditation
            on warmth, distance, and the resonance of an empty room. Press play
            and let it run.
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
