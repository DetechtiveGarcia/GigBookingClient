"use client";
import { useState, useEffect } from "react";
import { fetchAllGigBookings, updateGigBooking } from "@/lib/actions";
import { GigBooking, GigBookingRequest } from "@/types";

export function useGigBookings() {
  const [gigBookings, setGigBookings] = useState<GigBooking[]>([]);

  const refresh = async () => {
    const allBookings = await fetchAllGigBookings();
    setGigBookings(allBookings);
  };

  const modifyBooking = async (id: string, updatedData: GigBookingRequest) => {
    const updatedBooking = await updateGigBooking(id, updatedData);
    
    // Uppdatera även localStorage så att den lokala datan matchar repot
    const saved = JSON.parse(localStorage.getItem("myBookings") ?? "[]");
    const updatedLocalStorage = saved.map((gb: GigBooking) => 
      gb.id === id ? updatedBooking : gb
    );
    localStorage.setItem("myBookings", JSON.stringify(updatedLocalStorage));

    await refresh(); // Hämta ny data till kalendervyn
    return updatedBooking;
  };

  const getBookingByIdLocalStorage = (id: string): GigBooking | undefined => {
    const saved = JSON.parse(localStorage.getItem("myBookings") ?? "[]");
    return saved.find((gb: GigBooking) => gb.id === id);
};

  useEffect(() => {
    refresh();
  }, []);

  return { gigBookings, refresh, getBookingByIdLocalStorage, modifyBooking };
}