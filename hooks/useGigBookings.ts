"use client";
import { useState, useEffect } from "react";
import { fetchAllGigBookings } from "@/lib/actions";
import { GigBooking } from "@/types";

export function useGigBookings() {
  const [gigBookings, setGigBookings] = useState<GigBooking[]>([]);

  const refresh = async () => {
    const allBookings = await fetchAllGigBookings();
    setGigBookings(allBookings);
  };

  const getBookingByIdLocalStorage = (id: string): GigBooking | undefined => {
    const saved = JSON.parse(localStorage.getItem("myBookings") ?? "[]");
    return saved.find((gb: GigBooking) => gb.id === id);
};

  useEffect(() => {
    refresh();
  }, []);

  return { gigBookings, refresh, getBookingByIdLocalStorage };
}