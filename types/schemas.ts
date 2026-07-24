import { z } from "zod";


export const GigBookingSchema = z.object({
  id: z.string().min(1, "ID är obligatoriskt"),
  startDate: z.string().datetime("Ogiltigt startdatum"),
  endDate: z.string().datetime("Ogiltigt slutdatum"),
  street: z.string().min(1, "Gata är obligatorisk"),
  streetNumber: z.string().min(1, "Gatunummer är obligatoriskt"),
  zipCode: z.string().min(1, "Postnummer är obligatoriskt"),
  city: z.string().min(1, "Stad är obligatorisk"),
  clientName: z.string().min(1, "Namn är obligatoriskt"),
  clientEmail: z.string().email("Ogiltig email"),
  clientPhone: z.string().min(1, "Telefon är obligatorisk"),
  venue: z.string().min(1, "Spelplats är obligatorisk"),
});


export const GigBookingRequestSchema = GigBookingSchema.omit({
  id: true,
});


export const GigBookingFormSchema = GigBookingSchema.omit({
  id: true,
  startDate: true,
  endDate: true,
}).extend({
  startTime: z.string().min(1, "Starttid är obligatorisk"),
  endTime: z.string().min(1, "Sluttid är obligatorisk"),
});

export const findBookingSchema = z.object({
  bookingId: z.string().uuid("Ogiltigt bokningsnummer. Kontrollera ditt format."),
});

export type GigBooking = z.infer<typeof GigBookingSchema>;
export type GigBookingRequest = z.infer<typeof GigBookingRequestSchema>;
export type GigBookingFormValues = z.infer<typeof GigBookingFormSchema>;
export type FindBookingForm = z.infer<typeof findBookingSchema>;