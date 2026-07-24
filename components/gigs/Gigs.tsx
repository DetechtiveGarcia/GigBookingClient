"use client";

import styles from "./gigs.module.css";
import Gig from "./gig/Gig";
import { useGigBookings } from "@/hooks/useGigBookings"; // Justera sökvägen om det behövs

function formatDate(dateTimeStr: string) {
  if (!dateTimeStr) return "";
  
  const date = new Date(dateTimeStr);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date).toUpperCase();
}

export default function Gigs() {
  const { gigBookings } = useGigBookings();

  return (
    <ul className={styles.tourList}>
      {gigBookings.map((gig) => {
        const formattedDate = formatDate(gig.startDate);

        return (
          <li key={gig.id}>
            <Gig date={formattedDate} venue={gig.venue} styles={styles} />
          </li>
        );
      })}
    </ul>
  );
}