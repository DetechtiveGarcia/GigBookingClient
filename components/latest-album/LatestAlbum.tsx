import './latest-album.css'

type LatestAlbumProps = {
  titleWhite: string;
  titleOrange: string;
  description: string;
};

export default function LatestAlbum({
  titleWhite,
  titleOrange,
  description,
}: LatestAlbumProps) {
  return (
    <div className='hero-album-container'>
      <h1 className="serif text-white">
        {titleWhite}
        <br />
        <span className="italic text-orange">{titleOrange}</span>
      </h1>
      <div className="hero-album-description">
        <p className="text-dark">{description}</p>
      </div>
    </div>
  );
}
