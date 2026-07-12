import Image, { StaticImageData } from "next/image";
import "./track-item.css";

Image;
type AlbumItemProps = {
  title: string;
  img: StaticImageData;
  trackCountOfAlbum: number;
  alt: string;
  releaseDate: number;
};
export default function AlbumItem({
  title,
  img,
  trackCountOfAlbum,
  alt,
  releaseDate
}: AlbumItemProps) {
  return (
    <div className="track-container">
      <Image src={img} alt={alt} width={250} height={250} />
      <div className="album-name-n-release">
        <h4 className="serif text-white">{title}</h4>
        <p className="text-white">{releaseDate}</p>
      </div>
      <span className="text-dark">{trackCountOfAlbum} LÅTAR</span>
    </div>
  );
}
