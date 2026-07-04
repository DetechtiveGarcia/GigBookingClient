import album1 from "@/public/album-1.jpg";
import album2 from "@/public/album-2.jpg";
import album3 from "@/public/album-3.jpg";
import album4 from "@/public/album-4.jpg";
import SectionHeader from "@/components/section-header/SectionHeader";
import "./discography.css";

export default function Discography() {
  return (
    <section>
      <div className="discography-container">
        <div className="header-layout">
          <SectionHeader
            sectionLabel="02 / Discography"
            sectionHeading={
              <>A decade of {<span className="italic">six strings</span>}.</>
            }
          />
          <p className="text-white text-dark">
            Four records. Countless late nights. Every release self-produced in
            collaboration with a small circle of trusted players.
          </p>
        </div>
        <div className="album-grid">
            <ul>

            </ul>
        </div>
      </div>
    </section>
  );
}
