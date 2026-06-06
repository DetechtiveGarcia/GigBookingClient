"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import svLocale from "@fullcalendar/core/locales/sv";
import GigBookingModal from "./GigBookingModal";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { useGigBookings } from "@/hooks/useGigBookings";
import { GigBooking } from "@/types";
// import "@fullcalendar/common/main.css";
// import "@fullcalendar/daygrid/main.css";
export default function Calendar() {
  const { gigBookings, refresh, getBookingById } = useGigBookings();
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

  useEffect(() => {
    console.log("bookingDone changed:", bookingDone);
    if (!bookingDone) return;

    const formatted = bookedTime
      ? new Date(`${selectedDate}T${bookedTime.start}`).toLocaleString(
          "sv-SE",
          {
            dateStyle: "long",
            timeStyle: "short",
          },
        )
      : selectedDate;

    toast.success("Tack för din bokning!", {
      description: `${formatted} - ${bookedTime?.end}`,
      position: "top-center",
      style: {
        background: "#0A0A0A",
        color: "white",
      },
    });

    //   toast.success("Bekrästelse skickas till 'balblab' med odernummer om du önskar ombokad eller avboka", {
    //   description: `${formatted} - ${bookedTime?.end}`,
    //   position: "top-center",
    //   style: {
    //   background: "#0A0A0A",
    //   color: "white",
    // }
    // });

    refresh();
    setBookingDone(false);
  }, [bookingDone]);
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Bokningskalender</h1>
      <GigBookingModal
        {...{
          isOpen,
          setIsOpen,
          selectedDate,
          bookingDone,
          setBookingDone,
          setBookedTime,
          updateGigBooking,
        }}
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
          setSelectedDate(info.dateStr);
          setUpdateGigBooking({
            isUpdating: false,
            gigBooking: null,
          });
          setIsOpen(true);
        }}
        eventClick={(info) => {
          const currentBooking = getBookingById(info.event.id);
          if (!currentBooking) return toast.error("Hittade inte bokningen");

          setSelectedDate(currentBooking.startDate.split("T")[0]);
          setUpdateGigBooking({ isUpdating: true, gigBooking: currentBooking });
          setIsOpen(true);
        }}
      />
    </div>
  );
}
