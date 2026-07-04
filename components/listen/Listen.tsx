import SectionHeader from "../section-header/SectionHeader";
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
                The new <span className="italic">record</span>, in full
              </>
            }
          />
          <p className="text-dark">
            Ember Choir is the third full-length from Kade Ronan — a meditation
            on warmth, distance, and the resonance of an empty room. Press play
            and let it run.
          </p>
        </div>
        <div className="listen-playlist"></div>
      </div>
    </section>
  );
}
