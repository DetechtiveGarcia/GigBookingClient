export const extractTime = (dateStr: string) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toTimeString().substring(0, 5); 
};

export const timeOptions = Array.from({ length: 48 }, (_, i) => {
  const hours = Math.floor(i / 2).toString().padStart(2, "0");
  const minutes = i % 2 === 0 ? "00" : "30";
  return `${hours}:${minutes}`;
});

export const createISOString = (dateStr: string | null, timeStr: string): string => {
  if (!dateStr || !timeStr) return "";


  const localDate = new Date(`${dateStr}T${timeStr}:00`);


  const offsetMinutes = localDate.getTimezoneOffset(); 
  const absOffset = Math.abs(offsetMinutes);
  

  const offsetHours = Math.floor(absOffset / 60).toString().padStart(2, "0");
  const offsetMins = (absOffset % 60).toString().padStart(2, "0");
  

  const sign = offsetMinutes <= 0 ? "+" : "-";


  return `${dateStr}T${timeStr}:00${sign}${offsetHours}:${offsetMins}`;
};