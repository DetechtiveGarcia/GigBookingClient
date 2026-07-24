import styles from './gigs.module.css'
import Gig from "./gig/Gig";

const dates = [
  {
    startDate: {
      dateTime: "2026-07-10T17:00:00.000+00:00",
    },

    venue: "Trädgårn",
  },
  {
    startDate: {
      dateTime: "2026-07-18T18:00:00.000+00:00",
    },

    venue: "Berns Salonger",
  },
  {
    startDate: {
      dateTime: "2026-08-05T16:30:00.000+00:00",
    },
    venue: "Moriskan",
  },
];

type GigItem = {
  startDate: {
    dateTime: string;
  };
  venue: string;
};

function formatDate(dateTime: string) {
  const date = new Date(dateTime);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date).toUpperCase();
}

export default function Gigs() {
  return (
    <ul className={styles.tourList}>
      {dates.map((item: GigItem) => {
        const formatted = formatDate(item.startDate.dateTime);

        return <li key={item.startDate.dateTime}><Gig  date={formatted} venue={item.venue} styles={styles} /></li>
      })}
    </ul>
  );
}
