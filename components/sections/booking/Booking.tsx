import SectionHeader from "@/components/section-header/SectionHeader";
import BookingForm from "./BookingForm";
import Calendar from "@/components/calendar/Calendar";
import "./booking.css";
import Gigs from "@/components/gigs/Gigs";
import { useGigBookings } from "@/hooks/useGigBookings";

export default function Booking() {
  const { gigBookings, refresh } = useGigBookings();
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
          <Gigs gigBookings={gigBookings} />
        </div>
        <BookingForm />
      </div>
      <Calendar gigBookings={gigBookings} refresh={refresh} />
    </section>
  );
}
