export function convertReadableDateTime(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    hourCycle: "h12",
  };
  return date.toLocaleDateString(undefined, options);
}

export function convertTo12HourFormat(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  let hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const ampm: string = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12 for midnight
  const formattedMinutes: string =
    minutes < 10 ? `0${minutes}` : minutes.toString();
  return `${hours}:${formattedMinutes} ${ampm}`;
}

// @ts-ignore
export function checkAndRound(value) {
  if (typeof value === "number" && !isNaN(value)) {
    return value.toFixed(2);
  }
  return value;
}
