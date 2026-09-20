import album1 from "@/public/7a7117ea-ae42-467f-b47e-dc0c75c8ae72.jpeg";
import album2 from "@/public/årstidsvisor.jpg";
import album3 from "@/public/kärleks-album.jpg";
// import album4 from "@/public/album-4.jpg";
import SectionHeader from "@/components/section-header/SectionHeader";
import "./discography.css";
import AlbumItem from "./AlbumItem";

export default function Discography() {
  const albumList = [
    {
      title: "Rapalbum",
      trackCountOfAlbum: 10,
      img: album1,
      alt: "Bild på omslaget av albumet Rapalbum",
      releaseDate: 2024,
    },
    {
      title: "Årstidsvisor",
      trackCountOfAlbum: 8,
      img: album2, //samma bild som på rapalbum
      alt: "Bild på omslaget av albumet Årstidsvisor",
      releaseDate: 2025,
    },
    {
      title: "Kärleks-album",
      trackCountOfAlbum: 8,
      img: album3,
      alt: "Bild på omslaget av albumet Kärleks-album",
      releaseDate: 2026,
    },
    // {
    //   title: "Mjuka Ekon",
    //   trackCountOfAlbum: 12,
    //   img: album4,
    //   alt: "Bild på omslaget av albumet Mjuka Ekon",
    //   releaseDate: 2019,
    // },
  ];
  return (
    <section className="wrapper" id="discography">
      <div className="discography-container">
        <div className="header-layout">
          <SectionHeader
            sectionLabel="02 / Diskografi"
            sectionHeading={
              <>
                Ett decenium med {<span className="italic">sex strängar.</span>}
              </>
            }
          />
          <p className="text-white text-dark">
            3 Album med egen-komponerade låtar med hjälp av loopstation, mick och gitarr.
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
