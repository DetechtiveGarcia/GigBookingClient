"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import { createGigBooking } from "@/lib/actions";
import { 
  GigBookingFormSchema, 
  GigBookingFormValues, 
  GigBookingRequest, 
  GigBooking 
} from "@/types/schemas";
import { createISOString, getAvailableTimesForDate } from "@/lib/helpers";
import FormGroup from "@/components/form/FormGroup";
import "./booking-form.css";

export default function BookingForm() {
  const [eventDate, setEventDate] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<GigBookingFormValues>({
    resolver: zodResolver(GigBookingFormSchema),
    defaultValues: {
      startTime: "",
      endTime: "",
      street: "",
      streetNumber: "",
      zipCode: "",
      city: "",
      venue: "",
      clientName: "",
      clientEmail: "",
      clientPhone: "",
    },
  });

  const availableTimes = getAvailableTimesForDate(eventDate);

  const onSubmit = async (data: GigBookingFormValues) => {
  if (!eventDate) {
    toast.error("Vänligen välj ett eventdatum.");
    return;
  }

  try {
    const requestPayload: GigBookingRequest = {
      startDate: createISOString(eventDate, data.startTime),
      endDate: createISOString(eventDate, data.endTime),
      street: data.street,
      streetNumber: data.streetNumber,
      zipCode: data.zipCode,
      city: data.city,
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      clientPhone: data.clientPhone,
      venue: data.venue,
    };

    const newBooking: GigBooking = await createGigBooking(requestPayload);

    // Spara i LocalStorage
    const savedBookings = JSON.parse(localStorage.getItem("myBookings") ?? "[]");
    localStorage.setItem("myBookings", JSON.stringify([...savedBookings, newBooking]));

    toast.success("Tack för din förfrågan!", {
      description: "Vi återkommer inom 48 timmar.",
    });

    reset();
    setEventDate("");
  } catch (error: any) {
    // Här visas det exakta meddelandet från C# backenden i din toast!
    toast.error("Kunde inte skicka bokningen", {
      description: error.message || "Något gick fel, försök igen senare.",
    });
  }
};

  return (
    <div className="booking-form-container">
      <div className="form-header">
        <h6 className="text-white serif">Boka privat spelning/lektion</h6>
        <p className="text-dark">
          Festivaler, bröllop, sessioner och privata evenemang. Skicka ett
          meddelande så svarar teamet inom 48 timmar.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup label="namn" {...register("clientName")} />
        {errors.clientName && <p className="text-red-500 text-xs">{errors.clientName.message}</p>}
        <br />

        <FormGroup label="email" type="email" {...register("clientEmail")} />
        {errors.clientEmail && <p className="text-red-500 text-xs">{errors.clientEmail.message}</p>}
        <br />

        <FormGroup label="telefon" {...register("clientPhone")} />
        {errors.clientPhone && <p className="text-red-500 text-xs">{errors.clientPhone.message}</p>}
        <br />

        {/* Datumväljare */}
        <div>
          <label className="text-dark uppercase letter-spacing block mb-1">
            event datum
          </label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="text-white w-full bg-transparent border-b border-white p-1"
          />
        </div>
        <br />

        {/* Starttid */}
        <div>
          <label className="text-dark uppercase letter-spacing block mb-1">
            starttid
          </label>
          <select
            {...register("startTime")}
            className="text-white w-full bg-black border-b border-white p-1"
          >
            <option value="">Välj starttid</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          {errors.startTime && <p className="text-red-500 text-xs">{errors.startTime.message}</p>}
        </div>
        <br />

        {/* Sluttid */}
        <div>
          <label className="text-dark uppercase letter-spacing block mb-1">
            sluttid
          </label>
          <select
            {...register("endTime")}
            className="text-white w-full bg-black border-b border-white p-1"
          >
            <option value="">Välj sluttid</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          {errors.endTime && <p className="text-red-500 text-xs">{errors.endTime.message}</p>}
        </div>
        <br />

        <FormGroup label="spelplats" {...register("venue")} />
        {errors.venue && <p className="text-red-500 text-xs">{errors.venue.message}</p>}
        <br />

        <FormGroup label="stad" {...register("city")} />
        {errors.city && <p className="text-red-500 text-xs">{errors.city.message}</p>}
        <br />

        <FormGroup label="gata" {...register("street")} />
        {errors.street && <p className="text-red-500 text-xs">{errors.street.message}</p>}
        <br />

        <FormGroup label="gatunummer" {...register("streetNumber")} />
        {errors.streetNumber && <p className="text-red-500 text-xs">{errors.streetNumber.message}</p>}
        <br />

        <FormGroup label="postnummer" {...register("zipCode")} />
        {errors.zipCode && <p className="text-red-500 text-xs">{errors.zipCode.message}</p>}
        <br />

        <button type="submit" disabled={isSubmitting} className="letter-spacing">
          {isSubmitting ? "Skickar..." : "Skicka"}
        </button>
      </form>
    </div>
  );
}