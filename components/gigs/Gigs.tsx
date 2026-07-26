"use client";

import styles from "./gigs.module.css";
import Gig from "./gig/Gig";
import { useGigBookings } from "@/hooks/useGigBookings"; // Justera sökvägen om det behövs
import { GigBooking } from "@/types";
type GigsProps = {
  gigBookings: GigBooking[];
};

function formatDate(dateTimeStr: string) {
  if (!dateTimeStr) return "";

  const date = new Date(dateTimeStr);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  })
    .format(date)
    .toUpperCase();
}

export default function Gigs({ gigBookings }: GigsProps) {
  if (!gigBookings || gigBookings.length <= 0) {
    return <p className="text-white text-center">Inga spelningar.</p>;
  }
  return (
    <ul className={styles.tourList}>
      {gigBookings.slice(0, 10).map((gig) => {
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
