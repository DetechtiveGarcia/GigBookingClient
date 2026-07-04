import SectionHeader from "@/components/section-header/SectionHeader";
import "./artist.css";
import MetricCard from "./MetricCard";

const metricList = [
  {
    value: "120+",
    label: "föreställningar",
  },
  {
    value: "14",
    label: "länder",
  },
  {
    value: "1m+",
    label: "månadslyssnare",
  },
];
export default function Artist() {
  return (
    <section>
      <div className="artist-container">
        <div className="header-layout">
          <SectionHeader
            sectionLabel="03 / Om mig"
            sectionHeading={
              <>
                The <span className="italic">artist</span>.
              </>
            }
          />
        </div>
        <div className="artist-description">
          <p className="italic text-white serif">
            "I want every note to sound like it could have been the last one."
          </p>
          <p className="text-dark">
            Kade Ronan is a guitarist and composer based between Marfa and
            Brooklyn. Drawing from American Primitive, post-rock, and ambient
            traditions, his playing balances precision with patience — built on
            warm tube amps, dusty pedals, and a 1962 hollow-body that has
            followed him from his first dive-bar shows to the world's quietest
            concert halls. 
          </p>
            <br />
          <p className="text-dark">Since 2019 he has released four albums, toured across three
            continents, and collaborated with artists including Julien Wells,
            The Hollow Coast, and the Marfa Choir Collective.</p>
          <hr />
          <div className="metrics-container">
            <ul className="metrics-list">
                {metricList.map((m, i) => <li key={i}><MetricCard value={m.value} label={m.label}/></li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
