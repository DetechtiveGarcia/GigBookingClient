"use client";

import FindBookingModal from "../FindBookingModal";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import svLocale from "@fullcalendar/core/locales/sv";
import GigBookingModal from "../GigBookingModal";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { GigBooking } from "@/types";
import "./calendar.css";

type CalendarProps = {
  gigBookings: GigBooking[];
  refresh: () => Promise<void> | void;
};

export default function Calendar({ gigBookings, refresh }: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [bookedTime, setBookedTime] = useState<{
    start: string;
    end: string;
  } | null>(null);
  const [updateGigBooking, setUpdateGigBooking] = useState<{
    isUpdating: boolean;
    gigBooking: GigBooking | null;
  }>({ isUpdating: false, gigBooking: null });
  const [bookingDone, setBookingDone] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isFindOpen, setIsFindOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  // Hjälpfunktion för local storage sökning direkt
  const getBookingByIdLocalStorage = (id: string): GigBooking | undefined => {
    const saved = JSON.parse(localStorage.getItem("myBookings") ?? "[]");
    return saved.find((gb: GigBooking) => gb.id === id);
  };

  const handleBookingFound = (booking: GigBooking) => {
    setSelectedDate(booking.startDate.split("T")[0]);
    setUpdateGigBooking({ isUpdating: true, gigBooking: booking });
    setIsOpen(true);
  };

  

  return (
    <div className="calendar-container">
      <h2 className="text-white serif">Bokningskalender</h2>
      <p className="text-dark">Välj ditt önskade datum nedan. <br/>Om du klickar på en dag öppnas bokningsformuläret.</p>
      <GigBookingModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedDate={selectedDate}
        bookingDone={bookingDone}
        setBookingDone={setBookingDone}
        setBookedTime={setBookedTime}
        updateGigBooking={updateGigBooking}
        refresh={refresh}
      />

      <FindBookingModal
        isOpen={isFindOpen}
        setIsOpen={setIsFindOpen}
        gigBookings={gigBookings}
        onBookingFound={handleBookingFound}
        clickedEventId={selectedEventId}
      />

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={svLocale}
        validRange={{ start: new Date().toISOString().split("T")[0] }}
        events={gigBookings.map((gb) => ({
          id: gb.id,
          title: gb.venue,
          start: gb.startDate,
          end: gb.endDate,
        }))}
        dateClick={(info) => {
          const dayOfWeek = info.date.getDay();
          if (dayOfWeek >= 1 && dayOfWeek <= 4) {
            toast.error(
              "Bokningar kan endast göras på fredagar, lördagar och söndagar.",
            );
            return;
          }
          setSelectedDate(info.dateStr);
          setUpdateGigBooking({
            isUpdating: false,
            gigBooking: null,
          });
          setIsOpen(true);
        }}
        selectAllow={(selectInfo) => {
          const day = selectInfo.start.getDay();
          return day === 0 || day === 5 || day === 6;
        }}
        eventClick={(info) => {
          const currengigInLocalStorage = getBookingByIdLocalStorage(
            info.event.id,
          );

          if (!currengigInLocalStorage) {
            setSelectedEventId(info.event.id);
            setIsFindOpen(true);
            return;
          }

          setSelectedDate(currengigInLocalStorage.startDate.split("T")[0]);
          setUpdateGigBooking({
            isUpdating: true,
            gigBooking: currengigInLocalStorage,
          });
          setIsOpen(true);
        }}
      />
    </div>
  );
}