import MarqueeText from "./MarqueeText";
import "./marquee.css";

export default function Marquee() {
  const textList = ["Ember Kören", "Ute nu", "Spotify"];

  return (
    <section className="marquee-container">
      <div className="marquee-track">
        <ul className="marquee-list">
          {textList.map((text, i) => (
            <li key={i} className="marquee-list-item">
              <MarqueeText text={text} />
            </li>
          ))}
        </ul>

        <ul className="marquee-list" aria-hidden="true">
          {textList.map((text, i) => (
            <li key={i} className="marquee-list-item">
              <MarqueeText text={text} />
            </li>
          ))}
        </ul>

        <ul className="marquee-list" aria-hidden="true">
          {textList.map((text, i) => (
            <li key={i} className="marquee-list-item">
              <MarqueeText text={text} />
            </li>
          ))}
        </ul>
        <ul className="marquee-list" aria-hidden="true">
          {textList.map((text, i) => (
            <li key={i} className="marquee-list-item">
              <MarqueeText text={text} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
