export const extractTime = (dateStr: string) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toTimeString().substring(0, 5);
};

export const timeOptions = Array.from({ length: 48 }, (_, i) => {
  const hours = Math.floor(i / 2)
    .toString()
    .padStart(2, "0");
  const minutes = i % 2 === 0 ? "00" : "30";
  return `${hours}:${minutes}`;
});

export const createISOString = (
  dateStr: string | null,
  timeStr: string,
): string => {
  if (!dateStr || !timeStr) return "";

  const localDate = new Date(`${dateStr}T${timeStr}:00`);

  const offsetMinutes = localDate.getTimezoneOffset();
  const absOffset = Math.abs(offsetMinutes);

  const offsetHours = Math.floor(absOffset / 60)
    .toString()
    .padStart(2, "0");
  const offsetMins = (absOffset % 60).toString().padStart(2, "0");

  const sign = offsetMinutes <= 0 ? "+" : "-";

  return `${dateStr}T${timeStr}:00${sign}${offsetHours}:${offsetMins}`;
};

export function getAvailableTimesForDate(dateString: string | null): string[] {
  if (!dateString) return [];

  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const dayOfWeek = date.getDay(); // 0 = Söndag, 5 = Fredag, 6 = Lördag

  let startHour = 0;
  let endHour = 0;

  if (dayOfWeek === 5) {
    startHour = 20;
    endHour = 23;
  } else if (dayOfWeek === 6) {
    startHour = 16;
    endHour = 24;
  } else if (dayOfWeek === 0) {
    startHour = 12;
    endHour = 20;
  } else {
    return []; // Inga tider för vardagar
  }

  const times: string[] = [];
  for (let h = startHour; h <= endHour; h++) {
    const formattedHour =
      h === 24 ? "00:00" : `${h.toString().padStart(2, "0")}:00`;
    times.push(formattedHour);
  }

  return times;
}
