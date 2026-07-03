import "./hero.css";
export default function Hero() {
  return (
    <section className="hero overlay sides-padding">
      <span className="text-orange letter-spacing">NY ALBUM UTE NU</span>
      <h1 className="serif text-white">
        Ember
        <br />
        <span className="italic text-orange">Choir</span>
      </h1>
      <div className="album-description">
        <p className="text-dark">
          Elva spår med långsamt spelad fingerplockad gitarr, inspelade under en
          enda helg i ett ökenkapell utanför Marfa.
        </p>
      </div>
    </section>
  );
}
