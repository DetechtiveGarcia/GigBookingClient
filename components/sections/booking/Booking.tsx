import SectionHeader from "@/components/section-header/SectionHeader";
import BookingForm from "./BookingForm";
import Calendar from "@/components/calendar/Calendar";
import "./booking.css";
import Gigs from "@/components/gigs/Gigs";

export default function Booking() {
  return (
    <section className="wrapper" id="booking">
      <div className="booking-container">
        <div>
          <SectionHeader
            sectionLabel="04 / boka"
            sectionHeading={
              <>
                Spelningar <span className="italic">2026</span>
              </>
            }
          />
          <Gigs />
        </div>
        <BookingForm />


      </div>
       <Calendar />
    </section>
  );
}
