
type GigProps = {
  date: string;
  venue: string;
  styles: {
    readonly [key: string]: string;
  };
};

export default function Gig({ date, venue, styles }: GigProps) {
  return (
    <div className={styles.gigContainer}>
      <p className={styles.monthAndDay}>{date}</p>
      <p className={styles.venue}>{venue}</p>
    </div>
  );
}
