export type GigBooking = {
  _id: string;
  StartDate: DateValue;
  EndDate: DateValue;
  Street: string;
  StreetNumber: string;
  ZipCode: string;
  City: string;
  ClientName: string;
  ClientEmail: string;
  ClientPhone: string;
  Venue: string;
};

export type GigBookingRequest = {
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

type DateValue = {
  DateTime: string;
  Ticks: number;
  Offset: number;
};