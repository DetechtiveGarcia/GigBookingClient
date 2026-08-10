import SectionHeader from "@/components/section-header/SectionHeader";
import BookingForm from "./BookingForm";
import Calendar from "@/components/calendar/Calendar";
import "./booking.css";
import GigList from "@/components/gigs/GigList";
import { useGigBookings } from "@/hooks/useGigBookings";

export default function Booking() {
  const { gigBookings, refresh } = useGigBookings();
  return (
    <section className="wrapper" id="booking">
      <div className="booking-container">
        <div>
          <SectionHeader
            sectionLabel="05 / boka"
            sectionHeading={
              <>
                Spelningar <span className="italic">2026</span>
              </>
            }
          />
          <GigList gigBookings={gigBookings} />
        </div>
      </div>
      <Calendar gigBookings={gigBookings} refresh={refresh} />
    </section>
  );
}
