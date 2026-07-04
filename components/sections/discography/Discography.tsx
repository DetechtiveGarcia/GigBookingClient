import album1 from "@/public/album-1.jpg";
import album2 from "@/public/album-2.jpg";
import album3 from "@/public/album-3.jpg";
import album4 from "@/public/album-4.jpg";
import SectionHeader from "@/components/section-header/SectionHeader";
import "./discography.css";
import AlbumItem from "./AlbumItem";

export default function Discography() {
  const albumList = [
    {
      title: "Ember Kören",
      trackCountOfAlbum: 11,
      img: album1,
      alt: "Bild på omslaget av albumet Ember Kören",
      releaseDate: 2026,
    },
    {
      title: "Låga Frekvenser",
      trackCountOfAlbum: 9,
      img: album2,
      alt: "Bild på omslaget av albumet Låga frekvenser",
      releaseDate: 2023,
    },
    {
      title: "Mässing & Koppar",
      trackCountOfAlbum: 5,
      img: album3,
      alt: "Bild på omslaget av albumet Mässing & Koppar",
      releaseDate: 2021,
    },
    {
      title: "Mjuka Ekon",
      trackCountOfAlbum: 12,
      img: album4,
      alt: "Bild på omslaget av albumet Mjuka Ekon",
      releaseDate: 2019,
    },
  ];
  return (
    <section className="wrapper">
      <div className="discography-container">
        <div className="header-layout">
          <SectionHeader
            sectionLabel="02 / Discography"
            sectionHeading={
              <>
                Ett decenium med {<span className="italic">sex strängar.</span>}
              </>
            }
          />
          <p className="text-white text-dark">
            Fyra skivor. Otaliga sena kvällar. Varje utgåva egenproducerad i
            samarbete med en liten krets av betrodda musiker.
          </p>
        </div>
        <div className="album-grid">
          <ul className="album-list">
            {albumList &&
              albumList.map((album) => (
                <li key={album.title}>
                  <AlbumItem
                    title={album.title}
                    img={album.img}
                    trackCountOfAlbum={album.trackCountOfAlbum}
                    releaseDate={album.releaseDate}
                    alt={album.alt}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
