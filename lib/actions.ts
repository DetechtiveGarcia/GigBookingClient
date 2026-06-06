"use server";
import { CreateGigBookingRequest, GigBooking } from "@/types";
export async function fetchAllGigBookings(): Promise<GigBooking[]> {
  try {
    const data = await fetch(
      "http://localhost:5002/api/gigbooking/all-bookings",
    );

    if (!data.ok) {
      console.log("Something went wrong.");
      throw new Error("Something went wrong.");
    }

    const allBookings: GigBooking[] = await data.json();

    return allBookings;
  } catch (error) {
    console.log("Error: " + error);
    throw new Error("Error: " + error);
  }
}

export async function createGigBooking(
  gig: CreateGigBookingRequest,
): Promise<GigBooking> {
  try {
    const request = await fetch("http://localhost:5002/api/gigbooking/create", {
      method: "POST",
      body: JSON.stringify(gig),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!request.ok) {
      console.log(request.statusText);
      throw new Error(`${request.status}`);
    }

    const booking: GigBooking = await request.json();
    return booking ;
  } catch (error) {
    console.log("Error: " + error);
    throw new Error("Error: " + error);
  }
}
