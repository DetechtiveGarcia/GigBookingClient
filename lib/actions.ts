"use server";
import { GigBookingRequest, GigBooking } from "@/types";
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
  gig: GigBookingRequest,
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

export async function updateGigBooking(
  id: string,
  gig: GigBookingRequest,
): Promise<GigBooking> {
  try {
    const request = await fetch(`http://localhost:5002/api/gigbooking/update/${id}`, {
      method: "PUT", 
      body: JSON.stringify(gig),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!request.ok) {
      const errorJson = await request.json().catch(() => null);
      console.log(request.statusText);
      console.error("Backend error details:", errorJson);
      throw new Error(`Failed to update booking: ${request.status}`);
    }

    const updatedBooking: GigBooking = await request.json();
    return updatedBooking;
  } catch (error) {
    console.log("Error updating gig: " + error);
    throw new Error("Error updating gig: " + error);
  }
}