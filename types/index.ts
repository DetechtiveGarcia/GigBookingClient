export type GigBooking = {
  id: string;
  startDate: string;
  endDate: string;
  street: string;
  streetNumber: string;
  zipCode: string;
  city: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  venue: string;
};

export type CreateGigBookingRequest = {
  startDate: string;
  endDate: string;
  street: string;
  streetNumber: string;
  zipCode: string;
  city: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  venue: string;
};

export type LocalStorageSavedGigBookings = {
  gigBookings: GigBooking[];
}
