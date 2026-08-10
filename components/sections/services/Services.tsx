import SectionHeader from "@/components/section-header/SectionHeader";
import ServiceCard from "@/components/service-card/ServiceCard";
import styles from "./services-section.module.css";
import Text from "@/components/text/Text";
export default function Services() {
  return (
    <section className="wrapper" id="services">
      <SectionHeader
        sectionLabel="04 / Tjänster"
        sectionHeading={
          <>
            Lektioner & <span className="italic">live</span>.
          </>
        }
      >
        <Text text="Endast i Stockholm" className="text-dark"/>
      </SectionHeader>
      <div className={styles.serviceCardsContainer}>
        <ServiceCard
          title="Gitarrlektioner"
          price="5000kr"
          packageDetails="12 st x 60 min"
          details={
            "Perfekt för nybörjare och dig som vill ta nästa steg. Personlig undervisning anpassad efter din nivå. Jag lär ut teknik, rytm, fingersättning, plock och improvisation.\n \nLär dig spela gitarr på ett roligt sätt med hjälp av skalor, teknikövningar, ackord, fingerplock och kompförslag till dina favoritlåtar."
          }
          features={[
            "Online eller hos mig i Nacka",
            "Gitarr går att låna",
            "Alla nivåer",
          ]}
          buttonStyle={styles.buttonOrange}
          buttonLabel="BOKA LEKTIONER &#x2192;"
        />
        <ServiceCard
          title="Liveframträdanden"
          price="5000kr"
          packageDetails="3 timmar live"
          details={
            "Covers och egna låtar med massa gitarrsolon emellanåt — perfekt för barer, restauranger, privatfester, AW, festivaler och företagsevent.\n \nRepertoar med klassiker från Creedence Clearwater Revival, Elvis Presley, Ben E. King, Tommy Nilsson, Nanne Grönvall, Patrik Isaksson, Red Hot Chili Peppers m.fl. Blandat med egna låtar för en mer personlig och unik upplevelse."
          }
          features={[
            "Professionellt ljud & bra energi",
            "Högtalare och mikrofon ingår",
            "Resekostnader ingår i priset",
          ]}
          buttonStyle={styles.buttonDark}
          buttonLabel="BOKA LIVE &#x2192;"
        />
      </div>
    </section>
  );
}
