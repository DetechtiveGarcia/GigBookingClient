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
  /*
   TODO: lägg till att det är 3 timmar 
      1h covers
      1h egna låtar
      1h inspelad material/improvisation
  */
  return (
<section className="wrapper" id="about">
      <div className="artist-container">
        <div className="header-layout">
          <SectionHeader
            sectionLabel="03 / Om mig"
            sectionHeading={
              <>
                <span className="italic">Temolldur</span>
              </>
            }
          />
        </div>
        <div className="artist-description">
          <p className="italic text-white serif text-center">
            "Jag vill komponera det ingen har gjort förut."
          </p>
          <p className="text-dark">
            Med Ackord och melodier som har ett unikt sound i massa olika tonarter med solon till.
          </p>
            <br />
          <p className="text-dark">Med hjälp av loopstation får jag ett <span className="italic">unikt</span> en-mans band sound som jag kan framföra live med över 50 egna låtar och covers.</p>
          <hr />
          {/* <div className="metrics-container">
            <ul className="metrics-list">
                {metricList.map((m, i) => <li key={i}><MetricCard value={m.value} label={m.label}/></li>)}
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
}
