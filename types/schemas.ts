import { z } from "zod";

export const createGigBookingSchema = z.object({
  startTime: z.string().min(1, "Starttid är obligatorisk"),
  endTime: z.string().min(1, "Sluttid är obligatorisk"),
  street: z.string().min(1, "Gata är obligatorisk"),
  streetNumber: z.string().min(1, "Gatunummer är obligatoriskt"),
  zipCode: z.string().min(1, "Postnummer är obligatoriskt"),
  city: z.string().min(1, "Stad är obligatorisk"),
  clientName: z.string().min(1, "Namn är obligatoriskt"),
  clientEmail: z.string().email("Ogiltig email"),
  clientPhone: z.string().min(1, "Telefon är obligatorisk"),
  venue: z.string().min(1, "Spelplats är obligatorisk"),
});

export type CreateGigBookingForm = z.infer<typeof createGigBookingSchema>;