import album1 from "@/public/album-1.jpg";
import album2 from "@/public/album-2.jpg";
import album3 from "@/public/album-3.jpg";
import album4 from "@/public/album-4.jpg";
import SectionHeader from "@/components/section-header/SectionHeader";
import "./discography.css";
import TrackItem from "./TrackItem";

export default function Discography() {
  const albumList = [
    {
      title: "Ember Choir",
      trackCountOfAlbum: 11,
      img: album1,
      alt: "Bild på album Ember Choir",
      releaseDate: 2026
    },
    {
      title: "Low Frequencies",
      trackCountOfAlbum: 9,
      img: album2,
      alt: "Bild på album Low Frequencies",
      releaseDate: 2023
    },
    {
      title: "Brass & Copper",
      trackCountOfAlbum: 5,
      img: album3,
      alt: "Bild på album Brass & Copper",
      releaseDate: 2021
    },
    {
      title: "Hollow Body Sessions",
      trackCountOfAlbum: 12,
      img: album4,
      alt: "Bild på album Brass & Copper",
      releaseDate: 2019
    },
  ];
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
          <ul className="album-list">
            {albumList &&
              albumList.map((album) => <li key={album.title}><TrackItem title={album.title} img={album.img} trackCountOfAlbum={album.trackCountOfAlbum} releaseDate={album.releaseDate} alt={album.alt} /></li>
              )}
          </ul>
        </div>
      </div>
    </section>
  );
}
