import Image, { StaticImageData } from "next/image";
import "./track-item.css";

Image;
type TrackItemProps = {
  title: string;
  img: StaticImageData;
  trackCountOfAlbum: number;
  alt: string;
  releaseDate: number;
};
export default function TrackItem({
  title,
  img,
  trackCountOfAlbum,
  alt,
  releaseDate
}: TrackItemProps) {
  return (
    <div className="track-container">
      <Image src={img} alt={alt} width={300} height={300} />
      <div className="album-name-n-release">
        <h4 className="serif text-white">{title}</h4>
        <p className="text-white">{releaseDate}</p>
      </div>
      <span className="text-dark">{trackCountOfAlbum} LÅTAR</span>
    </div>
  );
}
