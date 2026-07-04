import SectionHeader from "@/components/section-header/SectionHeader";
import BookingForm from "./BookingForm";
import "./booking.css";
export default function Booking() {
  return (
    <section className="wrapper" id="booking">
      <div className="booking-container">
        <SectionHeader
          sectionLabel="04 / boka"
          sectionHeading={
            <>
              Spelningar <span className="italic">2026</span>
            </>
          }
        />
        <BookingForm />
      </div>
    </section>
  );
}
