export function getTime(): string {
  return new Date().toLocaleString("en-GB", {
    timeZone: "Europe/Berlin",
    weekday: "long",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });
}