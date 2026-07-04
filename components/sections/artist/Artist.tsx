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
                <span className="italic">Artisten.</span>
              </>
            }
          />
        </div>
        <div className="artist-description">
          <p className="italic text-white serif">
            "Jag vill att varje ton ska låta som om den kunde ha varit den sista."
          </p>
          <p className="text-dark">
            Temolldur är gitarrist och kompositör baserad mellan himmel och jord. Med inspiration från amerikanska primitiv-, postrock- och ambient- traditioner balanserar hans spel precision med tålamod - byggt på varma rörförstärkare, dammiga pedaler och en hollow-body från 1962 som har följt honom från hans första spelningar på barer till världens tystaste konserthus.
          </p>
            <br />
          <p className="text-dark">Sedan 2019 har han släppt fyra album, turnerat över tre kontinenter och samarbetat med artister som Petter, Svenska Björnstammen och <span className="italic">fcking</span> Snoop Dogg.</p>
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
